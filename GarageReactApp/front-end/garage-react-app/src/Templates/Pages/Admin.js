import React, { useState } from 'react';

import CreateEvents from './CreateEvents';
import CreateWorkshops from './CreateWorkshops';

const testUser = {
    id: 123,
    name: "Jason",
    password: "123",
    subscription: "admin"
}

function LoginButton(prop) {
    return (
      <button onClick={prop.onClick}>
        Login
      </button>
    );
}
  
function LogoutButton(prop) {
    return (
      <button onClick={prop.onClick}>
        Logout
      </button>
    );
}

const Admin = () => {

    const [authentification, setAuthentification] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    let user = {
        username: username,
        password: password
    }

    const onChangeUsername = e => {
        setUsername(e.target.value);
    }
    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const loginAuth = e => {
        if((username === testUser.name) && (password === testUser.password) && (testUser.subscription === "admin")){
            e.preventDefault();
            setAuthentification(true);
            setUsername('');
            setPassword('');
        }
        else{
            alert('You are not an admin!')
        }
    }
    const logout = e => {
        setAuthentification(false);
    }
    
    let form;
    if(authentification === true){
        form = 
        <div>
            <LogoutButton onClick={logout} />
            <CreateEvents />
            <CreateWorkshops />
        </div>
    }
    else{        
        form =
        <div>            
            <form className="admin-login" onSubmit={loginAuth} >
                <label>Admin Login</label><br />
                <label>Username</label><input type="text" value={username} onChange={onChangeUsername} /><br />
                <label>Password</label><input type="password" value={password} onChange={onChangePassword} /><br />
            </form>
            <LoginButton onClick={loginAuth} />
        </div>

    }

    return(
        <div>
            {form}
        </div>
    )
}

export default Admin;