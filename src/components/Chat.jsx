import React from "react";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
const Chat = ({ user, profile, message, setMessage }) => {
  return (
    <ChatContainer>
      <ChatHeader user={user} profile={profile} />
      <ChatInput message={message} setMessage={setMessage} />
    </ChatContainer>
  );
};

export default Chat;
