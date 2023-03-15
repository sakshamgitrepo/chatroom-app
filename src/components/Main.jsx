import React from 'react'
import Chat from './Chat'
import Login from './Login'
import { useState } from "react";
import profile from '../assets/profile.png'

const Main = () => {
    const [newUser, setNewUser] = useState("");
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");
  
    const logNewUser = () => {
      setUser(newUser);
    };
  return (
    <main className="content">
    <div className="container mt-3">
      {user ? (
<Chat user={user} profile={profile} message={message} setMessage={setMessage}/>
      ) : (
<Login newUser = {newUser} setNewUser={setNewUser} logNewUser={logNewUser}  />
      )}
    </div>
  </main>
  )
}

export default Main