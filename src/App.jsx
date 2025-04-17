//import elements
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

//Elements: home, about, button, header, footer

//Home-page

//About-page

//Button

//Header

//Footer

function App() {
  //className is same as class would be in a CSS file
  //elements are not classnames, they are a type of element e.g., <Button> (thus why classes are capitalized)
  return (
    <div className="layout">
      React demo
      <div>
        <Home />
        <Button text="Click Me" backgroundColor="black"></Button>
      </div>
    </div>
  );
}

export default App;
