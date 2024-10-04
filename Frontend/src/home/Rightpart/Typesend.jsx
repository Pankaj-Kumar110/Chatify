import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import { ImAttachment } from "react-icons/im"
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-1 h-[8vh]  bg-[#e0f2ff] py-1">
        <div className=" w-[85%] mx-3">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex items-center w-full py-2 px-2 rounded-xl grow outline-none bg-white mt-1"
          />
        </div>
        <button className="px-3">
          <ImAttachment className="text-3xl" />
        </button>
        <button>
          <GrSend className="text-3xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
