import React from "react";
import Header from "./Header";
import "./App.css";
// import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <div className="app__body">
            <Header />
            <Feed />
          </div>
        )}
    </div>
  );
}

export default App;
