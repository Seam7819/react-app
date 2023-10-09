
const Link = ({route}) => {
    const {name,id,path} = route
    return (
        <div>
            <li><a href={path}> {name} </a></li>
        </div>
    );
};

export default Link;