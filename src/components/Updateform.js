import React, {useState} from 'react';
import {updatingPost} from '../api';

const Updateform = ({isChanged, setIsChanged}) => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [link, setLink] = useState('')
    const [active, setActive] = useState(true)
    const [productimage, setProductimage] = useState('')

const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Starting to Submit Update:", id, name, description, location, link, active, productimage)
    setIsChanged(false)
    try {
        const update = await updatingPost(Number(id), name, description, location, link, active, productimage)
        console.log("Data updated: ", update)
        setIsChanged(true)
        setName('')
        setDescription('')
        setLocation('')
        setLink('')
        setId(0)
        setProductimage('')

    } catch (error) {
        console.error(error)
    }
}

    return (

       <form onSubmit={handleSubmit} style={{position: "fixed", top: "150px", left:"30%", zIndex: "1", backgroundColor:"white", border: "1px solid green",
            display: "flex", flexDirection: "column", padding: "1rem"
            }}>
       
            <h3 style={{backgroundColor: "rgb(210, 93, 113)", color: "white"}}>Update Post </h3>

            <p style={{fontWeight: "bolder"}}>ID to Update: {id}
            {/* <span 
            // onClick={(event) => {setIsUpdating(false)}} 
            style={{color: "red", border: "1px solid black", paddingLeft: "3px", paddingRight: "3px", marginLeft: "30px", fontSize: "22px", textAlign: "right"}}>X 
            </span> */}
            </p>
            <label>ID:</label>
            <input type="number" placeholder="ID" value={id}
                onChange={ (event) => setId(event.target.value)}
            />
            <label>Name:</label>
            <input type="text" placeholder="Name" value={name}
                onChange={ (event) => setName(event.target.value)}
            />
            <label>Description:</label>
            <textarea rows="10" cols="30" placeholder="Description" value={description} 
                onChange={ (event) => setDescription(event.target.value)}
            />
            <label>Location:</label>
            <input type="text" placeholder="Location" value={location} 
                onChange={ (event) => setLocation(event.target.value)}
            />
            <label>Link:</label>
            <input type="text" placeholder="Link" value={link}
                onChange={ (event) => setLink(event.target.value)}    
            />
            <label>Active:</label>
            <input type="text" placeholder="Active" value={true}
                onChange={ (event) => setActive(event.target.value)}
            />
             <label>Image:</label>
            <input type="text" placeholder="productimage" value={productimage}
                onChange={ (event) => setProductimage(event.target.value)}    
            />
            <button style={{margin: "5px"}} type="submit">Submit Changes</button>

        </form>
    );
};

export default Updateform;