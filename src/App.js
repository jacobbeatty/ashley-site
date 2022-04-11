import logo from "./logo.svg";
import "./App.css";
import "./components/Nav";
import Content from "./components/Content";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex">
      <div className="flex-none w-40">
        <Nav />
      </div>
      <div className="flex-auto w-96">
        <Content />
      </div>
    </div>
  );
}

export default App;
