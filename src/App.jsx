import { useState } from "react";
import harsh from "./assets/harsh.png";
import verified from "./assets/verified.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://schwitz.xyz" target="_blank">
          <img src={harsh} className="logo" alt="schwitz logo" />
        </a>
      </div>
      <div className="home">
        <div className="container">
          <div className="name">
            <h2>Harsh bhardwaj </h2>
            <img className="verified" src={verified} alt="" />
          </div>
          <p>
            💻Self Learned Developer, Python | CSS | JS | HTML | Wordpress | c#
          </p>
          <a className="card" target="_blank" href="https://schwitz.xyz">
            Portfolio
          </a>
          <a className="card" target="_blank" href="https://schwitz.xyz">
            Portfolio
          </a>
          <a className="card" target="_blank" href="https://schwitz.xyz">
            Portfolio
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
