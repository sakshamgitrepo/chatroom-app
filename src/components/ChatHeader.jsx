import React from 'react'

const ChatHeader = ({user, profile}) => {
  return (
    <div className=" borderBottom align-items-start py-3 px-4 w-100 border-info d-lg-block sticky-top bg-white">
            <div className="d-flex align-items-center py-1">
              <div className="position-relative">
                <img
                  src={profile}
                  alt={user}
                  className="rounded-circle mx-2"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex-grow-1">
                <strong>{user}</strong>
              </div>
              <div className="flex-grow-1">
                <strong className="fs-3">Chatter Box</strong>
              </div>
            </div>
          </div>
  )
}

export default ChatHeader