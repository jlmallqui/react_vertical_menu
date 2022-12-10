 
import React from "react";
import { NavBar } from "../menu/navBar";


 

export const Layout = ({ children }) => {
    
  return (
    <>
      
        <NavBar children = {children} />         
 
   
    </>
  );
};