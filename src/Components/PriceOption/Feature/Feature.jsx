import { BsCheckCircle } from 'react-icons/bs';

const Feature = ({feature}) => {
    // console.log(feature)
    return (
        <div>
            <p className="text-left  flex items-center gap-5">
               <BsCheckCircle></BsCheckCircle>{feature}
            </p>
        </div>
    );
};

export default Feature;