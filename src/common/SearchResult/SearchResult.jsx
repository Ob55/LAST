import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');

    const fetchData = async () => {
      try {
        const response = await fetch('https://price-backend-1.onrender.com/products');
        const data = await response.json();

        const results = data.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (query) {
      fetchData();
    } else {
      fetchData();
    }
  }, [location.search]);

  return (
    <div className='search-results'>
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((item, index) => (
            <li key={index}>
              <img
                src={item.image_Link}
                alt={item.name}
                onError={(e) => {e.target.onerror = null; e.target.src="fallback_image_url_here"}}
              />
              <p>{item.price}</p>
              {console.log(item.image_Link)}
            </li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default SearchResult;
