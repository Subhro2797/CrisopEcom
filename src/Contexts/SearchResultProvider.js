import React, { createContext, useContext, useState } from 'react';
import { ProductContext } from './ProductsProvider';
import { useNavigate } from 'react-router-dom';

export const SearchResultContext = createContext();

const SearchResultProvider = ({ children }) => {
    const [value, setValue] = useState('');
    const { products } = useContext(ProductContext);
    const [hideSuggestions, setHideSuggestions] = useState(true);
    const [result, setResult] = useState(null);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    }
    const specificProduct = products.find(product => product.id);


    const searchResultInfo = { value, hideSuggestions, setHideSuggestions, setValue, result, setResult, handleInputChange, specificProduct }
    return (
        <SearchResultContext.Provider value={searchResultInfo}>
            {children}
        </SearchResultContext.Provider>
    );
};

export default SearchResultProvider;