import React from 'react';

const Welcome = () => {
    return (
        <div style={{padding: "1em"}}>
            <p>I live in San Luis Obispo County and started my wine tasting adventure at local tasting rooms
                and wineries when I moved to the Central Coast of California! This encompasses: Edna Valley, Paso Robles, Arroyo Grande and more.
            </p>
            <p>
                With each taste from my glass, I'd take in the flavors and uniqueness
                of each winery and tasting room and write my opinions here. See my <a className="welcomeMessage" href="https://www.sanluisobispomom.com/blog/san-luis-obispo-county-winery-reviews"
                title="Reviews of Wineries in San Luis Obispo and Paso Robles"
                >All Wine Places</a> section to 
                see all of my personal reviews or select a winery or tasting room below.
            </p>
            <p>
                Please drink responsibly and use a transportation service when it's unsafe to drive.
            </p>
           
        </div>
    )
};

export default Welcome;