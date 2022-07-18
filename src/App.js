import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

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
    <div className="App">
      <NavBar
        language={language}
        setLanguage={setLanguage}
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
        listNavItems={listNavItems}
      ></NavBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
