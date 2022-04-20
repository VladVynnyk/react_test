import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header/>
        <Intro/>
        <Cards/>
        <Form/>
        <Footer/>
    </div>
  );
}

export default App;
