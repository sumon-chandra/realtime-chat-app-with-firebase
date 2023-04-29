import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find user" />
      </div>
      <div className="userChat">
        <img src="https://i.ibb.co/7k3MQZc/google.png" alt="" />
        <div className="userChatInfo">
          <span>jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
