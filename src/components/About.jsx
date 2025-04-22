import "../styles/about.css";

import Button from "./Button";

const About = ({ onNavigate }) => {
  return (
    <div className="about">
      <main className="content">
        <h2>About</h2>
        <p>This page is about this application</p>
        <div className="button-container">
          <Button
            text="Go Back!"
            backgroundColor="limegreen"
            onClick={() => onNavigate("home")}
          />
        </div>
      </main>
    </div>
  );
};

export default About;
