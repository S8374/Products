import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
  const Details = useLoaderData();
  const { id } = useParams();
  const IntId = parseInt(id);
  const nav = useNavigate();

  const handelBack = () => {
    nav(-1);
  };

  const cossesItems = Array.isArray(Details)
    ? Details.find(detail => detail.id === IntId)
    : Details;

  if (!cossesItems) {
    return <div>Product not found</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const handelAddItems = () => {
    const isItemInCart = saveData(IntId);

    if (isItemInCart) {
      toast.success('Your item has been added');
    } else {
      toast.error('This item is already in the cart');
    }
  };

  const saveData = (id) => {
    const existingData = localStorage.getItem("cartItems");
    let cartItems = existingData ? JSON.parse(existingData) : [];

    if (!cartItems.includes(id)) {
      cartItems.push(id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log(`Product with ID ${id} added to cart.`);
      return true; // Item was added
    } else {
      console.log(`Product with ID ${id} is already in the cart.`);
      return false; // Item was not added
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cossesItems.img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cossesItems.img.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-w-screen min-h-screen bg-yellow-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          {/* Image Slider */}
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0 relative">
            <div className="product-card relative">
              <div className="product-images relative">
                <img
                  src={cossesItems.img[currentIndex]}
                  alt={cossesItems.title || "Product Image"}
                  className="w-full h-auto object-cover rounded-lg"
                />

                {/* Next and Previous Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
                >
                  &#10094;
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
                >
                  &#10095;
                </button>
              </div>

              {/* Dots for Pagination */}
              <div className="flex justify-center mt-4">
                {cossesItems.img.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === currentIndex ? "bg-yellow-600" : "bg-gray-300"
                    }`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl lg:text-3xl mb-5">
                {cossesItems.title}
              </h1>
              <p className="text-sm lg:text-base text-gray-700">
                {cossesItems.description || "No description available."}
                <a
                  href="#"
                  className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs lg:text-sm leading-none border-b border-gray-900"
                >
                  MORE <i className="mdi mdi-arrow-right"></i>
                </a>
              </p>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-4xl lg:text-5xl leading-none align-baseline">
                  {cossesItems.price}
                </span>
                <span className="text-2xl leading-none align-baseline">.99</span>
              </div>
              <div className="inline-block align-bottom mt-3 flex justify-start">
                <button
                  onClick={handelAddItems}
                  className="bg-yellow-300 opacity-90 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-6 lg:px-10 py-2 font-semibold transition"
                >
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> Add Items
                </button>
                <button
                  onClick={handelBack}
                  className="ml-4 bg-transparent border-2 border-yellow-300 text-yellow-900 hover:bg-yellow-300 hover:text-white px-6 lg:px-10 py-2 rounded-full transition"
                >
                  Back Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Detail;
