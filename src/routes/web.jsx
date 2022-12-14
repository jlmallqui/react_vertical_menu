// routes.js
import { Routes, Route } from "react-router-dom";
//import { Layout } from "./components/menu/layout";  

import {Home} from '../site/web/index' 

export const WebRouter = () => {
return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      
    </>
  );

}






 