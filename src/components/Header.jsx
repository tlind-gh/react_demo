//Header component

//import Button to use it in Header
import Button from "./Button";

//import header css file
import "../styles/header.css";

//title as prop, so that the header title can change depending on page
//() => onNavigate("home"), is an arrow function bc it is short hand for the eventlistener. If you omit the "() =>" and just have the function it will run constrantly and not ju onClick
const Header = ({ title, onNavigate }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Button
          text="Home"
          backgroundColor="green"
          onClick={() => onNavigate("home")}
        />
        <Button
          text="About"
          backgroundColor="blue"
          onClick={() => onNavigate("about")}
        />
      </nav>
    </header>
  );
};

//export component
export default Header;
