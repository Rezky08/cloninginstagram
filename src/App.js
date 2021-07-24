// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import DefaultContainer from "./components/layouts/DefaultContainer";
import Profile from "@/components/sections/profiles/Profile";

function App() {
  return (
    <div className="App bg-gray-50 h-screen w-screen">
      <Header></Header>
      <DefaultContainer>
        <Profile />
      </DefaultContainer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
