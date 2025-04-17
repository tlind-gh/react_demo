/*Button component
ubiquotus button that should be able to recieve different links/text/background color*/

//import button css file
import "../styles/button.css";

//arrow-function for Button component (must start w. a function, does not need to be arrow function, but some kind of function)
//takes "props" (same as arguments for the function) NB! when a function is an arguments for another function, do not use parenthesis "()" at the end of function name
const Button = ({ onClick, backgroundColor, text }) => {
  //must have a parent element that holds all together, either a <div> or similar, OR just "<>" (fragment element)
  //onClick, run the input prop "onClick", button text is the prop "text"
  //style needs double curly braces
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
};

//export component
export default Button;
