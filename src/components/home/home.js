import React from 'react';
import {Navbar} from './Navbar'
import {ShowCategories} from '../categories/ShowCategories'

export const Home = () => {
    return (
        <div className="home">
            <div>
                <Navbar/>
            </div>
            <div>
                <ShowCategories/>
            </div>
        </div>
    );
};