import React, {useState} from 'react';
import {updatingPost} from '../api';

const Updateform = ({isChanged, setIsChanged}) => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [link, setLink] = useState('')
    const [active, setActive] = useState(true)

const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Starting to Submit Update:", id, name, description, location, link, active)
    setIsChanged(false)
    try {
        const update = await updatingPost(Number(id), name, description, location, link, active)
        console.log("Data updated: ", update)
        setIsChanged(true)
        setName('')
        setDescription('')
        setLocation('')
        setLink('')
        setId(0)

    } catch (error) {
        console.error(error)
    }
}

    return (

       <form onSubmit={handleSubmit} style={{position: "fixed", top: "200px", left:"30%", zIndex: "1", backgroundColor:"white", border: "1px solid green"}}>
       
            <h3 style={{backgroundColor: "#28A744", color: "white"}}>Update Post </h3>

            <p style={{fontWeight: "bolder"}}>ID to Update: {id}
            <span 
            // onClick={(event) => {setIsUpdating(false)}} 
            style={{color: "red", border: "1px solid black", paddingLeft: "3px", paddingRight: "3px", marginLeft: "30px", fontSize: "22px", textAlign: "right"}}>X </span>
            </p>

            <input type="number" placeholder="ID" value={id}
                onChange={ (event) => setId(event.target.value)}
            />
            <input type="text" placeholder="Name" value={name}
                onChange={ (event) => setName(event.target.value)}
            />
            <input type="text" placeholder="Description" value={description} 
                onChange={ (event) => setDescription(event.target.value)}
            />
            <input type="text" placeholder="Location" value={location} 
                onChange={ (event) => setLocation(event.target.value)}
            />
            <input type="text" placeholder="Link" value={link}
                onChange={ (event) => setLink(event.target.value)}    
            />
            <input type="text" placeholder="Active" value={true}
                onChange={ (event) => setActive(event.target.value)}
            />
            <button style={{margin: "5px"}} type="submit">Submit Changes</button>

        </form>
    );
};

export default Updateform;