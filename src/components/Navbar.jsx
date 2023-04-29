import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Sumon Chat</span>
      <div className="user">
        <img src="https://i.ibb.co/tpCjy0Z/Profile.jpg" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
