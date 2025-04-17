import "../styles/home.css";

import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="content">
        <h2>Home Page</h2>
        <p>This is a simple React App demo</p>
        <div className="button-container">
          <Button
            text="Click Me!"
            backgroundColor="tomato"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
