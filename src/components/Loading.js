import React from 'react';
import logo from '../sensorio_wine_bottles.jpg';

const Loading = () => {
    return (
        <div>
            <img style={{textAlign: "center"}} src={logo} className="App-logo" alt="logo" />
            <h2>Loading Places...</h2>
        </div>
    )
};

export default Loading;