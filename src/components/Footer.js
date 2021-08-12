import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Accordion from 'react-bootstrap/Accordion';
import Postform from './Postform';
import Updateform from './Updateform';
import Login from './Login';

const Footer = ({isChanged, setIsChanged, token, setToken}) => {

    const [openPostform, setOpenPostform] = useState(false);
    const [openUpdateForm, setOpenUpdateForm] = useState(false)
    const [openLoginForm, setOpenLoginForm] = useState(false)

    const year =  new Date().getFullYear() ;

    return (
        <div className="footer"> 
        
            <span style={{fontWeight: "bold"}}>&copy;{year} Lipstained Glass
                (This site is still under development. Reviews are added on an ongoing basis.)
            </span>
            <p className="footerLinks">
                <span><a href="/wineries">All Wine Places</a></span>
                <span><a href="/about">About</a></span>

               { token ? 
                <span><button onClick={() => setOpenPostform(!openPostform)}>Admin</button></span>
               : ""}
                </p>
            <p>Lipstained Glass was built by the 
                author using React,
                PostgresSQL, Node, Express and Multer/Cloudinary.
                </p>
            <p>All reviews are personal opinions of the author and I encourage you to come
                with an open mind with wine tasting! Everyone's tastebuds
                have distinct preferences but preferences can change. All reviews are
                written as a hobby and not sponsored in any way at this time.
                Thank you for visiting.
                </p>
            <button onClick={()=>{setOpenLoginForm(!openLoginForm)}}>Lipstained Glass Admin</button>    
            { openLoginForm?  <Login token={token} setToken={setToken}
             setOpenPostform={setOpenPostform} setOpenUpdateForm={setOpenUpdateForm}
            /> : '' }
        
            { openPostform? 
                <Postform/>
                :
                ''
            }

            {openPostform? 

                <div>
                <p style={{fontWeight: "bold", marginTop: "30px", marginLeft: ".5em"}}>Other Admin Tools:</p>
                <button style={{backgroundColor: "rgb(51, 59, 66)", color: "white",
                    padding: "1em", fontSize: "1.1em", border: "none", borderRadius: "7px",
                }}onClick={() => setOpenUpdateForm(!openUpdateForm) }>{openUpdateForm?
                    `Close Update Form`
                    
                    :
                    `Update a Wine Place`
                    }
                    </button>
                </div>
                :
                ''
            }

            { openUpdateForm? 
                <Updateform isChanged={isChanged} setIsChanged={setIsChanged}/>
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