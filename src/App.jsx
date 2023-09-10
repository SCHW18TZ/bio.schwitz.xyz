import { useState } from "react";
import harsh from "./assets/harsh.png";
import verified from "./assets/verified.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={harsh} className="logo" alt="schwitz logo" />
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
          <a
            className="card"
            target="_blank"
            href="https://instagram.com/harshbhardwaj_6969"
          >
            Instagram
          </a>
          <a
            className="card"
            target="_blank"
            href="https://github.com/SCHW18TZ"
          >
            Github
          </a>
        </div>
        <footer>
          <div className="love">
            <p>
              Made with ❤️ by{" "}
              <a
                target="_blank"
                href="https://instagram.com/harshbhardwaj_6969"
              >
                Harsh Bhardwaj
              </a>
            </p>
          </div>
          {/* copyright */}
          <div className="copyright">
            <p> &copy; harsh 2023 </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
