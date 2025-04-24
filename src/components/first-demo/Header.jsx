//Header component

//import Button to use it in Header
import Button from "./Button";

//import header css file
import "../../styles/header.css";

//import Link for router
import { Link } from "react-router-dom";

//title as prop, so that the header title can change depending on page
//() => onNavigate("home"), is an arrow function bc it is short hand for the eventlistener. If you omit the "() =>" and just have the function it will run constrantly and not ju onClick
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/" className="link">
          <Button text="Home" backgroundColor="green" />
        </Link>
        <Link to="/about" className="link">
          <Button text="About" backgroundColor="blue" />
        </Link>
      </nav>
    </header>
  );
};

//export component
export default Header;
