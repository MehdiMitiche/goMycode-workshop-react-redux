import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/Header";
import Books from "./components/Books";
import Filters from "./components/Filters";

function App() {
  return (
    <div>
      <Header title="BOOKS" />
      <div className="content">
        <Filters styles={{ flex: 1 }} />
        <Books styles={{ flex: 2 }} />
      </div>
    </div>
  );
}

export default App;
