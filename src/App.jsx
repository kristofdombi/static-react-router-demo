import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const routes = [
  {
    href: "/",
    content: "Home",
  },
  {
    href: "pages/1",
    content: "Page #1",
  },
  {
    href: "pages/2",
    content: "Page #2",
  },
  {
    href: "pages/3",
    content: "Page #3",
  },
];

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Routes</h1>
      <ul className="clean-ul card">
        {routes.map((route) => (
          <li key={route.href}>
            <Link to={route.href}>{route.content}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
