import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import { ImAttachment } from "react-icons/im";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center h-[8vh] bg-white py-2 px-4 shadow-top rounded-lg opacity-90">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-2 px-4 rounded-lg border border-gray-300 outline-none bg-white text-black placeholder-opacity-90 focus:border-blue-500 transition-colors duration-200"
            style={{
              fontSize: '16px', // Consistent font size
            }}
          />
        </div>
        <button type="button" className="flex items-center px-2">
          <ImAttachment className="text-3xl text-gray-700 hover:text-gray-900 transition-colors duration-200" />
        </button>
        <button
          type="submit"
          className="flex items-center px-2 ml-2 bg-white text-black rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 shadow-md"
          style={{
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Enhanced shadow for depth
          }}
        >
          <GrSend className="text-3xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;






