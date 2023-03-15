import React from 'react'

const ChatInput = ({message, setMessage}) => {
  return (
    <div className=" borderTop mt-auto oalign-items-end py-3 px-4 border-top d-lg-block">
    <div className="input-group flex-fill">
        <input type="text"  className="form-control shadow-none" name="message" value={message} placeholder="type your message" onChange={(e)=>setMessage(e.target.value)}/>
        <button className="btn btn-info" >send</button>
    </div>
 </div>
    )
}

export default ChatInput