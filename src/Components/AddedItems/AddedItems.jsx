import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import './Added.css'
const AddedItems = ({item , handelDelate }) => {
    const nav = useNavigate()
   const handelBack = () => {
      nav(-1) ;
   }
    return (
        <div>
            <div className="min-h-screen grid place-items-center font-mono bg-gray-900">

                <div className="bg-white rounded-md bg-gray-800 shadow-lg">
                    <div className="md:flex px-4 leading-none max-w-4xl">
                        <div className="flex-none ">
                            <img
                                src={item.img}
                                alt="pic"
                                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                            />
                        </div>

                        <div className="flex-col text-gray-300">

                            <p className="pt-4 text-2xl font-bold text-black ">{item.title} </p>
                            <hr className="hr-text" data-content="" />
                                <p className="hidden md:block px-4 my-4 text-sm text-left text-black"> {item.productDetails} </p>

                                <p className="flex text-md px-4 my-2 text-black">
                                    {item.brand}
                                    <span className="font-bold px-2 text-black">|</span>
                                    Price: {item.price}
                                </p>

                                <div className="text-xs">
                                    <button type="button" onClick={() => handelDelate(item.id)} className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Delete</button>

                                    <button onClick={handelBack} type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Back</button>

                                    <NavLink to={'/reviews'} type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">See Reviews</NavLink>
                                </div>
                                <p className='text-black'>Category  :{item.category} </p>

                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 mb-4 w-full">
                        <div className="flex">
                            <i className="material-icons mr-2 text-red-600">favorite_border</i>
                            <i className="material-icons text-blue-600">remove_red_eye</i>
                        </div>
                        <div className="flex">
                            <h1 className='text-xl text-black '>Rating : {item.rating} </h1>
                            <i className="material-icons ml-2 text-yellow-600">star_outline</i>
                            <i className="material-icons ml-2 text-yellow-600">star_half</i>
                            <i className="material-icons ml-2 text-yellow-600">star</i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedItems;