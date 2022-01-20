import React from "react";
import user from "../data/user";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <div>
      <a key={user.projects.id} href="#home">home</a>
      <a key={user.projects.id} href="#about">about</a>
      <a key={user.projects.id} href="#projects">projects</a>
    </div>
    
    }</nav>;
}

export default NavBar;
