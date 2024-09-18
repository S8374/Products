
import { useNavigation } from "react-router-dom";
import Cards from "../Cards/Cards";

import MySwiper from "../Swiper/Swiper";

const Home = () => {
    const nav = useNavigation()
    return (
        <div>
            
  
              <MySwiper></MySwiper>
              <Cards></Cards>
        
            
         


        </div>
       
    );
};

export default Home;