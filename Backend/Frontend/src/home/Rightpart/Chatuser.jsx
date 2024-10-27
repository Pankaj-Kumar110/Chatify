import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="pl-5 pt-5 pb-5 h-[12vh] flex space-x-4 bg-white hover:bg-[#e0f2ff] duration-300 shadow-bottom items-center">
      <div>
        <div className={'avatar bg-[#f0f8ff] p-1 rounded-full'}>
          <div className="w-12 rounded-full overflow-hidden">
            <img src="/photo.jpg" alt="User Avatar" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-sm text-[#333]">{selectedConversation.fullname}</h1>
        <span className="text-sm text-gray-500">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;


