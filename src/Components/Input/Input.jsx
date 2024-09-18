import './input.css'
import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('Products.json') 
      .then(res => res.json()) 
      .then(data => {
        setProducts(data);
        // Initialize with empty suggestions
        setSuggestions([]);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setSuggestions([]);
      onSearch(''); // Show all products
    } else {
      const filteredSuggestions = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      onSearch(searchTerm); // Show filtered products based on search term
    }
  }, [searchTerm, products, onSearch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Trigger search with the current search term
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
          required
          name="search"
          type="search"
          autoComplete="off"
        />
        <button type="submit" className="search-btn">
          <span>Search</span>
         
        </button>
        <h1 className='text-2xl text-black'>Search Heare</h1>
      </form>
    
    </div>
  );
};

export default SearchBar;

