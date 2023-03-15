import React from 'react'
import Chat from './Chat'
import Login from './Login'
import { useState, useEffect } from "react";
import profile from '../assets/profile.png'

const Main = ({socket}) => {
    const [newUser, setNewUser] = useState("");
    const [user, setUser] = useState({});
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);



    useEffect(() => {
      socket.on('users', (users)=>{
        const messagesArr = [];
        for (const{userId, username} of users){
          const newMessage = {type:'userStatus', userId, username};
          messagesArr.push(newMessage)
        }
        setMessages([...messages, ...messagesArr])
        setUsers(users)
      })
     socket.on('session',({userId, username})=>{
      setUser({userId,username})
     })
     socket.on('user connected',({userId, username})=>{
      const newMessage = {type:'userStatus', userId, username};
      setMessages([...messages, newMessage])
    })
    }, [socket, messages])
    
  
    const logNewUser = () => {
      setUser(newUser);
      socket.auth = {username : newUser}
      socket.connect()
    };
  return (
    <main className="content">
    <div className="container mt-3">
      {user.userId ? (
<Chat user={user} profile={profile} message={message} messages={messages} setMessage={setMessage}/>
      ) : (
<Login newUser = {newUser} setNewUser={setNewUser} logNewUser={logNewUser}  />
      )}
    </div>
  </main>
  )
}

export default Main