import "../../styles/about.css";

import { Link } from "react-router-dom";

//make a dynamic route
import { useParams } from "react-router-dom";

const AboutPage = () => {
  const params = useParams();
  return (
    <div className="about">
      <main className="content">
        <h2>About</h2>
        <p>{params.pageId}</p>
        <div className="link__list">
          <ul>
            <li>
              <Link className="link" to="/about/p1">
                Page 1
              </Link>
            </li>

            <li>
              <Link className="link" to="/about/p2">
                Page 2
              </Link>
            </li>

            <li>
              <Link className="link" to="/about/p3">
                Page 3
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
