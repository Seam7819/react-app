import { AiOutlineMenuFold,AiOutlineCloseCircle } from 'react-icons/ai';
import Link from '../Link/Link';
import { useState } from 'react';

const Navbar = () => {

    const [open,setOpen] = useState(false)

    const routes = [
        {
          name: 'Home Route',
          id: 1,
          path: '/home',
        },
        {
          name: 'Profile Route',
          id: 2,
          path: '/profile',
        },
        {
          name: 'Blog Post Creation Route',
          id: 3,
          path: '/blog/create',
        },
        {
          name: 'Product Creation Route',
          id: 4,
          path: '/products/create',
        },
        {
          name: 'User Registration Route',
          id: 5,
          path: '/register',
        },
      ];
      

    return (
        <div>
            <nav onClick={() => setOpen(!open) } className='text-3xl md:hidden'>
                {
                    open === true? <AiOutlineCloseCircle></AiOutlineCloseCircle> : <AiOutlineMenuFold></AiOutlineMenuFold>
                }
      
            </nav>
            <ul className= {`md:flex absolute duration-1000  gap-10 ${open ? '' : 'hidden'} `} >
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </div>
    );
};

export default Navbar;