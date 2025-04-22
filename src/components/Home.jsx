import "../styles/home.css";

import Button from "./Button";

const Home = () => {
  return (
    <div className="home">
      <main className="content">
        <h2>Home</h2>
        <p>This is the home page of the application</p>
        <div className="button-container">
          <Button
            text="Click Me!"
            backgroundColor="tomato"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
