import React, { useContext } from 'react';
import './SearchBar.css';
import { ProductContext } from '../../Contexts/ProductsProvider';
import { useNavigate } from 'react-router-dom';
import { SearchResultContext } from '../../Contexts/SearchResultProvider';

const SearchBar = () => {
    const { value, specificProduct, hideSuggestions, setHideSuggestions, handleInputChange, setValue, setResult, result } = useContext(SearchResultContext);
    const { products } = useContext(ProductContext);
    const navigate = useNavigate();
    const handleSearch = (searchTerm, id) => {

        setValue(searchTerm);
        setResult(products.find((product) => product.title === searchTerm));
        if (result) {
            navigate(`/products/${id}`);
        }
    }



    const handleValueSet = (searchTerm) => {
        setValue(searchTerm);
    }

    return (
        <div className=''>
            <div className='search-container-alternative'>

                <input type="text"
                    className='search-box'
                    onFocus={() => setHideSuggestions(false)}
                    onBlur={async () => {
                        setTimeout(() => {
                            setHideSuggestions(true);
                        }, 200);
                    }}
                    placeholder=' Search your product'
                    value={value}
                    onChange={handleInputChange} />

                <button className='search-btn' onClick={() => handleSearch(value)}>Search</button>


            </div>
            <div className={hideSuggestions ? 'dropdown-new-hidden' : 'dropdown-new'}>
                {
                    products.filter(product => {
                        const searchTerm = value.toLowerCase();
                        const productActualName = product.title.toLowerCase();


                        return productActualName && productActualName.includes(searchTerm) && productActualName !== searchTerm;
                    }).map((product) => <div className='dropdown-row' onClick={() => handleSearch(product.title, product.id)}>
                        {product.title}
                    </div>)
                }
            </div>
            {/* {result && <Result resultedProduct={result}></Result>} */}

        </div>
    );
};

export default SearchBar;