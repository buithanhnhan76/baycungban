import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";

function App() {
  const [language, setLanguage] = useState("vietnamese");
  const [selectedNavItem, setSelectedNavItem] = useState("");
  const listNavItems = [
    "Promotion",
    "Flight Schedule",
    "About Us",
    "Payment Guide",
  ];
  return (
    <div className=" home-background">
      <NavBar
        language={language}
        setLanguage={setLanguage}
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
        listNavItems={listNavItems}
      ></NavBar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
