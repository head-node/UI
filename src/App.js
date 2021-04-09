import React from "react";
import "./App.css";
import Sidenav from "./components/SideNav/sidenav";
import Header from "./components/Header/Header";
import Container from "./components/Container.js/index.js"

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
      <div style={{display: 'flex'}}>
      <Sidenav  navlist={menu}/>
      <Container />
      </div>
      
    </>
  );
};

export default App;
