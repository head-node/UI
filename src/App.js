import react from "react";
import "./App.css";
import Sidenav from "./components/SideNav/sidenav";
import Header from "./components/Header/Header"
const menu = [
  "Dashboard",
  "Users",
  "Loan Application",
  "Loan Schedule",
  "Parner Management",
  "Revenue Management",
  "Insurance",
  "Communications",
  "Bulk Update",
  "Rules",
  "Company Policies",
  "IOT",
];

const App = () => {
  return (
    <> 
      <Header/>
      <Sidenav navlist={menu}/>
    </>
  );
};

export default App;
