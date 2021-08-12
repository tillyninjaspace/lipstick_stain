import React, {useState} from 'react';
import {logIn} from '../api';

const Login = ({setToken, token, setOpenPostform, setOpenUpdateForm}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogout = () => {
        setToken('');
        setOpenPostform(false);
        setOpenUpdateForm(false);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const user = await logIn(username, password)
            if (user.token) {
            setToken(user.token)
            setUsername('')
            setPassword('')
            } else {
             console.log("Username and Password Not Valid")
            }
          } catch (error) {
            console.error(error)
          }

    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
            <label>Admin Log-In Only</label>
            <label>Username</label>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <label>Password</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button>Log In</button>
            </form>

           {token?  <button className="logout" onClick={onLogout}>Log Out</button>  : ''} 
        </div>
    )
};

export default Login;