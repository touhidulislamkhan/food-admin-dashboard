import React, { useState } from 'react';
import './Home.css';

import UserPage from './User/UserPage';
import { useDispatch, useSelector } from 'react-redux';
import { searchDish } from '../redux/actionCreators';

const Home = () => {

    const dishes = useSelector(state => state.dishes);
    const searchItem = useSelector(state => state.search);
    // console.log(dishes);

    const dispatch = useDispatch();


    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    // console.log(search);


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(search);
        setIsSearch(true);
        dispatch(searchDish(search));
        setSearch('');
    }

    const dishItem = dishes.map(dish => {
        return (
            <div className="col-md-3">
                <UserPage dish={dish} />
            </div>
        )
    })

    const dishSearch = searchItem.map(item => {
        return (
            <div className="col-md-3">
                <UserPage dish={item} />
            </div>
        )
    })


    return (
        <div className='container'>
            <div className="row">
                <form className='search-form' onSubmit={handleSubmit}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Dish' />
                    <button className="btn btn-primary btn-sm">Search</button>
                </form>
            </div>
            <div className="row">
                {isSearch ? dishSearch : dishItem}
            </div>

        </div>
    )
}

export default Home
