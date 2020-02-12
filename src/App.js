import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeader from "./layout/NavHeader";
import Footer from "./layout/Footer";
import Page from "./layout/Page";

function App() {
  return (
    <div className="page">
      <Router>
        <div className="container-fluid">
          <header>{<NavHeader />}</header>
          <section>{<Page />}</section>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
