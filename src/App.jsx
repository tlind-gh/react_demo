//import elements
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

//useState is built in into react and is imported thus
import { useState } from "react";

//Elements: home, about, button, header, footer

//Home-page

//About-page

//Button

//Header

//Footer

function App() {
  //check state and show the correct page (home or about)
  //nomenclature - "getter" = {name}, "setter" = set{name}
  //useState({default value}), always have a default value, otherwise can cause issues
  const [currentPage, setCurrentPage] = useState("home");

  //if the function is onNavigate, the function here should be called handleNavigate

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  //className is same as class would be in a CSS file
  //elements are not classnames, they are a type of element e.g., <Button> (thus why classes are capitalized)
  return (
    <div className="layout">
      <div>
        <Header title="React Demo App" onNavigate={handleNavigate} />

        {currentPage === "home" ? (
          <Home />
        ) : (
          <About onNavigate={handleNavigate} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
