import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddedItems from "../AddedItems/AddedItems";

const Add = () => {
  const all = useLoaderData(); // Loaded data from the loader
  const [items, setItems] = useState([]);

  // Function to get stored cart items from localStorage
  const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('cartItems');
    if (storedJobApplication) {
      return JSON.parse(storedJobApplication); // Should be an array of IDs
    }
    return [];
  };

  useEffect(() => {
    const storedData = getStoredJobApplication(); // Retrieve stored cart item IDs

    if (all.length > 0 && storedData.length > 0) {
      const selectedItems = storedData
        .map(id => all.find(item => item.id === id)) // Find matching items by ID
        .filter(item => item); // Filter out undefined values in case no match is found

      console.log("Matched items:", selectedItems); // Debugging matched items

      setItems(selectedItems); // Update state with the selected items
    }
  }, [all]);

  // Function to remove items from localStorage
  const removeLocalItems = (id) => {
    const items = getStoredJobApplication(); // Get current localStorage items
    const remainingItems = items.filter(itemId => itemId !== id); // Filter out the deleted item
    localStorage.setItem('cartItems', JSON.stringify(remainingItems)); // Update localStorage
  };

  // Function to handle delete both from state and localStorage
  const handelDelate = (id) => {
    const remainingItems = items.filter(item => item.id !== id); // Remove item from state
    setItems(remainingItems); // Update state
    removeLocalItems(id); // Also remove from localStorage
  };

  return (
    <div>
      <div>
        {/* Render selected items here */}
        { items.length > 0 ? items.map(item => (
          <AddedItems key={item.id} item={item} handelDelate={handelDelate} />
        )): <div>
                
                
<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                You Not Add Any Items
                            </h1>
                            <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage and add items </p>
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
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
        
        }
      </div>
    </div>
  );
};

export default Add;
