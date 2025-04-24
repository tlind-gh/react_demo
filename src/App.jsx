import "./styles/array.css";

import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [showMil, setShowMil] = useState(false);
  const [totalWealth, setTotalWealth] = useState(null);

  useEffect(() => {
    fetchRandomUser(3);
  }, []);

  const fetchRandomUser = async (count = 1) => {
    try {
      const res = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await res.json();

      const newUsers = data.results.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
      }));

      if (count === 1) {
        // om vi bara hämtar en användare (från knappen)
        setUserData((prevUsers) => [...prevUsers, newUsers[0]]);
      } else {
        // om vi hämtar flera användare, kan styra antalet
        setUserData(newUsers);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const doubleMoney = () => {
    setUserData((prevUser) =>
      prevUser.map((user) => ({
        ...user,
        money: user.money * 2,
      }))
    );
  };

  function sortByRichest() {
    setUserData((prevUsers) =>
      [...prevUsers].sort((a, b) => b.money - a.money)
    );
  }

  const showMillionaires = () => {
    setShowMil(!showMil);
  };

  function calculateWealth() {
    const wealth = userData.reduce((acc, user) => acc + user.money, 0);
    setTotalWealth(wealth);
  }

  const displayedUsers = showMil
    ? userData.filter((user) => user.money > 1000000)
    : userData;

  function formatMoney(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  return (
    <div className="app">
      <h1>DOM Array Methods</h1>
      <div className="container">
        <aside>
          <button onClick={() => fetchRandomUser(1)}>👤 Add User</button>
          <button onClick={doubleMoney}>💵 Double Money</button>
          <button onClick={showMillionaires}>
            💰 {showMil ? "Show All" : "Show Only Millionaires"}
          </button>
          <button onClick={sortByRichest}>⬇️ Sort by Richest</button>
          <button onClick={calculateWealth}>🧮 Calculate entire Wealth</button>
        </aside>

        <main>
          <h2>
            <strong>Person</strong> Wealth
          </h2>
          {displayedUsers.map((person, index) => (
            <div key={index} className="person">
              <strong>{person.name}</strong> {formatMoney(person.money)}
            </div>
          ))}

          {/*&& is "if", it checks if totalWealth  !== null, and if that is true,
          it shows the element below. This keeps from crashing if it happeneds that
          totalWealth does not exist, fail safe/error gate*/}
          {totalWealth !== null && (
            <div className="total-wealth">
              <h3>
                Total wealth: <strong>{formatMoney(totalWealth)}</strong>
              </h3>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

/*DEMO 1

//import elements
import Footer from "./components/first-demo/Footer";
import Header from "./components/first-demo/Header";
import Home from "./components/first-demo/Home";
import About from "./components/first-demo/About";
import AboutPage from "./components/AboutPage";

//useState is built in into react and is imported thus
import { useState } from "react";
//can be imported when having added the dependency for react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //check state and show the correct page (home or about)
  //nomenclature - "getter" = {name}, "setter" = set{name}
  //useState({default value}), always have a default value, otherwise can cause issues
  const [currentPage, setCurrentPage] = useState("home");

  //if the function is onNavigate, the function here should be called handleNavigate

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  //className is same as class would be in a CSS file
  //elements are not classnames, they are a type of element e.g., <Button> (thus why classes are capitalized)

  //Browser router is top level element for navigation purposes
  //header and footer are placed globally, inside Routes is the content that will be changed dpending on routes
  //path= url (customary to be "/" for home page, element = what to show)
  return (
    <BrowserRouter>
      <div className="layout">
        <Header title="React Demo App" onNavigate={handleNavigate} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:pageId" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
*/
