import React from "react";
import "./App.css";

import Header from "./layout/Header";
import NavBar from "./layout/NavBar";
import Matrix from "./layout/Matrix";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Matrix />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
