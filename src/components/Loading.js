import React from 'react';
import logo from '../sensorio_wine_bottles.jpg';
import giflogo from '../lipstickstain_logo.gif'

const Loading = () => {
    return (
        <div style={{textAlign: "center"}}>
            <p><img src={giflogo} style={{maxWidth: "100px"}} alt="logo" /></p>
            <h2>Loading Places...</h2>
        </div>
    )
};

export default Loading;