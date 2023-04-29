import React from "react";
import { BiVideo, BiUserPlus, BiDotsHorizontalRounded } from "react-icons/bi";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <BiVideo />
          <BiUserPlus />
          <BiDotsHorizontalRounded />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
