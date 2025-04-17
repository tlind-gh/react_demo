//Footer component

//import footer css file
import "../styles/footer.css";

const Footer = () => {
  //get the current yeat from the built in Date class
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {year}, My First React App</p>
    </footer>
  );
};

export default Footer;
