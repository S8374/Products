import { useEffect, useState } from "react";
import Card from "../Card/Card";
import SearchBar from "../Input/Input";
import { useNavigation } from "react-router-dom";

const Cards = () => {
     const [products , setProducts] = useState([]);  
     const  [girlCategory , setGirlCategory] = useState([]) ;
    const [boysCategory , setBoysCategory] = useState([]) ;
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [dataLength , setDataLength] = useState(6) ;
    const nav = useNavigation()
    //  console.log(products)
     useEffect(()=>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data =>{
                setProducts(data) ;

                setFilteredProducts(data);
        })  ;

       
     const girls = products.filter(product => product.category === 'Girl') ;
     setGirlCategory(girls) ;
 
      const Boys = products.filter(prod => prod.category === 'Boys');
      setBoysCategory(Boys) ;
     },[]) ;
 
     const handleSearch = (searchTerm) => {
        // Filter products based on the search term (case insensitive)
        const filtered = products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) // Search based on title
        );
        setFilteredProducts(filtered); // Update the filtered products state
      };
    return (
        <div className="space-y-10">
                <div className="text-center">
                        <h1 className="text-5xl font-blod text-black">All Products </h1>
                </div>
                 <SearchBar  onSearch={handleSearch}></SearchBar>
             
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                      { 
                         nav.state === 'loading' ?   
                         <div className="text-center">
                         <div
                           className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
                         ></div>
                         <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                         <p className="text-zinc-600 dark:text-zinc-400">
                           Your adventure is about to begin
                         </p>
                        </div> :
                        filteredProducts.slice(0 , dataLength).map(product => <Card product = {product}></Card>)
                      }
                </div>
                <div >
                     <button>
                           <button onClick={() => setDataLength(filteredProducts.length)} className="btn btn-outline btn-info">See All</button>
                     </button>
                </div>
        </div>
    );
};

export default Cards;