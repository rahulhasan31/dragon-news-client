import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategoris]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/news-category')
        .then(res=>res.json())
        .then(data=> setCategoris(data))
    },[])
    return (
        <div>
       
            <h2>All Category {categories.length}</h2>
            {
                categories.map(category=> <p key={category.id}>

                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftSideNav;