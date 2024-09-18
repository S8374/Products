import { NavLink } from "react-router-dom";

const Card = ({product}) => {
    console.log(product)
    const {img,title,productDetails,price,id} = product ;
    return (
        <div>
          
<div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={img}/>
        <div className="p-4">
            <h2 className="text-2xl  font-blod text-black ">{title}</h2>
            <p className="text-xl text-black">Price :{price} $ </p>
            <p className="text-gray-600">{productDetails}</p>
            <div className="flex justify-between items-center mt-4">

               <NavLink to={`/${id}`}>
               <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">See Details</button>
                </NavLink> 
               
            </div>
        </div>
    </div>
        </div>
    );
};

export default Card;