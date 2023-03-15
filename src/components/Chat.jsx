import React from "react";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
const Chat = ({ user, profile, message, messages, setMessage }) => {
  return (
    <ChatContainer>
      <ChatHeader user={user} profile={profile} />
      <div className="position-relative overflow-auto">
        <div className="d-flex flex-column p-4">
          {messages?.map((message,index)=>{
            return message.type === 'userStatus' ? (<div key={index} className = "text-center">
              <span className="badge bg-info">
                {message.userId === user.userId ? 'You have joined' : `${message.username} has joined`}
              </span>
            </div>):null;

          })}
        </div>
      </div>
      <ChatInput message={message} setMessage={setMessage} />
    </ChatContainer>
  );
};

export default Chat;
