import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {



    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <>
          
        </>
    );
}
