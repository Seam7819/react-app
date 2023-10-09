import Feature from "./Feature/Feature";

const priceOption = ({option}) => {
    // console.log(option)
    const {name,features,price} = option;
    return (
        <div className="bg-lime-600 rounded-lg p-5 text-white">
            <h2>
                <span className="text-7xl">{price}</span>
                <span>/month</span>
            </h2>
            <div className="card">
            <h2 className="text-2xl font-bold">{name}</h2>
            
            </div>

            <div>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature> ) 
            } 
            </div>
            <button className="mt-3 w-full bg-lime-800 py-2 hover:bg-lime-500">Buy Now</button>
        </div>
    );
};

export default priceOption;