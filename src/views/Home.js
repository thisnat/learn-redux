import React from 'react';

import PersonList from '../components/PersonList'
import PersonAdd from '../components/PersonAdd'

const Home = () => {
    return (
        <div>
            <div className="container">
                <p className="display-4">fetch using redux-thunk !?!!?!</p>
                <PersonAdd/>
                <PersonList/>
            </div>
        </div>
    );
};

export default Home;