import { BrowserRouter as Router } from "react-router-dom";
import { getApp } from "./middlewares/aplication";
//import {AdminRouter} from "./routes/index";
import {WebRouter} from "./routes/web"; 
import {AdminRouter} from "./index";


export const App = () => {
  const CurrentApp = getApp()
  console.log(CurrentApp);
  return (
    <Router>
      <CurrentApp />
    </Router>
  );
}
 

// export const App = () => {
//   // const newapp = getApp()
//   //console.log({newapp});
//   return (
//     <Router>
//       <AdminRouter />
//     </Router>
//   );
// }
 

// export const WebApp = () => {
//   return (
//     <Router>
//       <WebRouter />
//     </Router>
//   );
// }
 