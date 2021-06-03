import React from 'react';

import Navbar from '../components/Navbar'

const Landing = () => {
    return (
        <div>

            <Navbar/>
            <div className="container mt-3">

                <div className="jumbotron">
                    <h1 className="display-4">learn redux 😳🤟</h1>
                    <p className="lead">learn redux learn redux learn redux learn redux learn redux learn redux</p>
                    <hr className="my-4"/>
                    <p>learn redux learn redux learn redux learn redux learn redux learn redux learn redux learn redux learn redux</p>
                    <a className="btn btn-primary btn-lg" href="/lol" role="button">Learn more</a>
                </div>

                <div className="mt-3">
                    <h1>too lazy to do this lol</h1>
                    <ul>
                        <li><a href="/home">redux-thunk fetch and react-bootstrap</a></li>
                        <li><a href="/play">my playground (experimental things)</a></li>
                        <li><a href="/cookie">cookie,localstorage and session things</a></li>
                        <li><a href="/whiteroom">shard-react shenanigans</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Landing;