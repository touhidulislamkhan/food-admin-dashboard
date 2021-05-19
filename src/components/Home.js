import React from 'react';

import UserPage from './User/UserPage';
import { useSelector } from 'react-redux';

const Home = () => {

    const dishes = useSelector(state => state.dishes);
    console.log(dishes);


    const dishItem = dishes.map(dish => {
        return (
            <div className="col-md-3">
                <UserPage dish={dish} />
            </div>

        )
    })


    return (
        <div className='container'>
            <div className="row">
                {dishItem}
            </div>

        </div>
    )
}

export default Home
