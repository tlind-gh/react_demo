import "../../styles/about.css";

import Button from "./Button";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <main className="content">
        <h2>About</h2>
        <p>This page is about this application</p>
        <div className="button-container">
          <Link to="/" className="link">
            <Button text="Go Back!" backgroundColor="limegreen" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;
