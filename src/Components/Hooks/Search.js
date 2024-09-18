import { useState } from "react";

// inputValue hook
const inputValue = (defaultValue = '') => { 
     const [value, setValue] = useState(defaultValue); // renamed to 'value'
     const onChange = (e) => {
          setValue(e.target.value); 
     }
     return {
           value, // renamed to 'value'
           onChange
     };
}


export default inputValue ;
