import React from "react";
import { BiLinkAlt, BiImage, BiSend } from "react-icons/bi";

const Input = () => {
  return (
    <div className="input">
      <input type="text" name="" id="" placeholder="Type something..." />
      <div className="send">
        <BiLinkAlt />
        <input type="file" name="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <BiImage />
        </label>
        <button>
          <BiSend />
        </button>
      </div>
    </div>
  );
};

export default Input;
