import React from 'react';

const Footer = () => {

    const year =  new Date().getFullYear() ;

    return (
        <div className="footer"> 
            &copy;Lipstick Stain {year}
            <p className="footerLinks">
                <span><a href="/wineries">All Wine Places</a></span>
                <span><a href="/about">About</a></span>
                <span>Family Friendly Wineries in Paso Robles</span>
                <span>Family Friendly Wineries in Edna Valley</span>
                <span>Admin</span>
            </p>
        </div>
    )
};

export default Footer;