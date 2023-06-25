import React from 'react';
import Category from '../Category/Category';
import './Categories.css';
import { FaAngleDoubleRight } from "react-icons/fa";

const Categories = (props) => {
    const { categories } = props;
    return (
        <div>
            <h3 className='category-title'>Categories <FaAngleDoubleRight></FaAngleDoubleRight></h3>
            <ul className='category-list'>
                {
                    categories.map((category, index) => <li><Category
                        category={category}
                        key={categories[index]}></Category></li>)
                }
            </ul>
        </div>
    );
};

export default Categories;