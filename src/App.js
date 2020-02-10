import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./layout/Header";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Page from "./layout/Page";

function App() {
  return (
    <Router>
      <div className="App">
        <header>{<Header />}</header>
        <nav>{<NavBar />}</nav>
        <main>{<Page />}</main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
