import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Show from "../src/component/Show";

import Main from "../src/component/Main";

function App() {
  return (
    <div className="App">
      <div></div>
      <div className="body">
        <Main />
        <Show />
      </div>
    </div>
  );
}

export default App;
