import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#678c90",
    color: "#fff",
    padding: "10px 16px"
  };

  return(
    <header style={headerStyle} className="Header">
      <h1 style={{fontSize: "25px", margin: "0", lineHeight: "1.447em"}}>Simple Todo App.</h1>
    </header>
  )
}

export default Header;