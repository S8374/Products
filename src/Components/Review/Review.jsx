import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewsCard from "../ReviewsCard/ReviewsCard";

const Review = () => { 
  const allData = useLoaderData(); // Loaded data
  const [reviewItems, setReviewItems] = useState([]); // State to store items with reviews
  console.log('added ',reviewItems)
  // Function to get stored items' IDs from localStorage
  const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('cartItems');
    if (storedJobApplication) {
      return JSON.parse(storedJobApplication); // Return array of IDs
    }
    return [];
  };
  const nav = useNavigate()
    const handelBack = () => {
        nav(-1)
    }
  // Function to update the cart in localStorage
  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };


  useEffect(() => {
    const storedData = getStoredJobApplication(); // Get IDs from localStorage
    if (allData.length > 0 && storedData.length > 0) {
      const selectedItems = storedData
        .map(id => allData.find(item => item.id === id)) // Find matching items by ID
        .filter(item => item); // Filter out undefined values in case no match is found

      setReviewItems(selectedItems); // Set state with selected items
    }
  }, [allData]);

  return (
    <div>
      <div><h1 className="text-4xl text-black">Public Reviews:</h1></div>
      {reviewItems.length > 0 ? (
        reviewItems.map(item => (
             <ReviewsCard item={item}></ReviewsCard>
        ))
      ) : (
         <div>
              
<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                 Not Add Items
                            </h1>
                            <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage and Add Items .</p>
                            <button onClick={handelBack} className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Back Home</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
         </div>
      )}
    </div>
  );
};

export default Review;
