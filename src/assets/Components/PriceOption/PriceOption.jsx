import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {

    const {type,price_per_month,features} = option;
    return (
        <div className="bg-blue-500 text-white rounded-lg text-center m-6 flex flex-col ">

            <h2><span className="text-7xl font-extrabold">${price_per_month} </span> <span className="text-3xl">/month</span></h2>

            <h3 className="text-4xl mt-4 font-normal ml-2">{type}</h3>
           <div className="mt-5 mb-5 flex-grow">
           {
            features.map((feature,indx) => <Feature key={indx} feature={feature}></Feature>)
           }

           </div>
           <button className=" w-3/4 mx-auto mb-6 bg-green-700 text-white py-3 font-bold rounded-lg hover:bg-green-500">Buy Now</button>
        </div>
    );
};

export default PriceOption;