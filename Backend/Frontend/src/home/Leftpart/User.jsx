import React from 'react';
import useConversation from '../../statemanage/useConversation';
import { useSocketContext } from '../../context/SocketContext';

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`cursor-pointer rounded-md mb-2 transition-all duration-300 
        ${isSelected ? 'bg-[#e0f2ff]' : 'hover:bg-[#e0f2ff]'}`} // Apply background color based on selection
      onClick={() => setSelectedConversation(user)}
      style={{
        paddingLeft: '6px',  // pl: 2
        paddingRight: '6px', // pr: 1.5
        paddingTop: '6px',    // py: 1
        paddingBottom: '6px',
        gap: '8px',           // gap: 2
        borderRadius: '0.5rem',  // borderRadius: 0.75
        color: isSelected ? 'var(--layout-nav-item-active-color)' : 'var(--layout-nav-item-color)',  // Set text color
        fontWeight: isSelected ? '600' : '500',  // fontWeightSemiBold for selected, Medium for normal
        width: '280px', // Set a fixed width
      }}
    >
      <div className="flex items-center space-x-4">
        <div>
          <div className={`avatar ${isOnline ? 'online' : ''}`}>
            <div className="w-8 rounded-full bg-black">
              <img
                src="/photo.jpg"
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-sm font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;




