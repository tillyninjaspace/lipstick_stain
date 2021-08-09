import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Accordion from 'react-bootstrap/Accordion';
import Postform from './Postform';

const Footer = () => {
    const [openPostform, setOpenPostform] = useState(false);
    const [openUpdateForm, setOpenUpdateForm] = useState(false)

    const year =  new Date().getFullYear() ;

    return (
        <div className="footer"> 
            <span style={{fontWeight: "bold"}}>&copy;Lipstick Stain {year} by Ninja Space Content</span>
            <p className="footerLinks">
                <span><a href="/wineries">All Wine Places</a></span>
                <span><a href="/about">About</a></span>
                <span>Family Friendly Wineries in Paso Robles</span>
                <span>Family Friendly Wineries in Edna Valley</span>
                <span><button onClick={() => setOpenPostform(!openPostform)}>Admin</button></span>
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
            { openPostform? 
                // <p>
                //     Do you see this?

                // </p>
                <Postform/>
                :
                ''
            }

            {openPostform? 

                <div>
                <p style={{fontWeight: "bold", marginTop: "30px", marginLeft: ".5em"}}>Other Admins Tools:</p>
                <button style={{backgroundColor: "rgb(51, 59, 66)", color: "white",
                    padding: "1em", fontSize: "1.1em", border: "none", borderRadius: "7px",
                }}onClick={() => setOpenPostform(!openPostform) }>Update a Wine Place</button>
                </div>
                :
                ''
            }
            {/* <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body style={{color: "black"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion> */}

        </div>
    )
};

export default Footer;