 
import React from "react";
import { NavBar } from "../menu/navBar";


 

export const Layout = ({ children }) => {
    
  return (
    <>
      
        <NavBar />         
 
      <div className="page-content p-5" id="content"> 
            {children}
       </div>
    </>
  );
};