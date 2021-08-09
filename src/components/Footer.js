import React from 'react';

const Footer = () => {

    const year =  new Date().getFullYear() ;

    return (
        <div className="footer"> 
            <span style={{fontWeight: "bold"}}>&copy;Lipstick Stain {year} by Ninja Space Content</span>
            <p className="footerLinks">
                <span><a href="/wineries">All Wine Places</a></span>
                <span><a href="/about">About</a></span>
                <span>Family Friendly Wineries in Paso Robles</span>
                <span>Family Friendly Wineries in Edna Valley</span>
                <span>Admin</span>
            </p>
            <p>Lipstain Stain was built by the 
                author using React, Redux, 
                PostgresSQL, Node, Express and Cloudinary.
                </p>
            <p>All reviews are personal opinions of the author and should obviously not
                be received as the be-all review. Everyone's tastebuds
                have distinct preferences. All are
                written as a hobby and not sponsored in any way at this time.
                Thank you for visiting.
                </p>    
        </div>
    )
};

export default Footer;