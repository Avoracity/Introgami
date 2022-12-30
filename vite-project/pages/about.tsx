import "../assets/styles/global.css";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Create from "../components/Create";
import QnA from "../components/QnA";
import Footer from "../components/Footer";

function about () {
  return (
    <div>
    <div className="page-property">

    <Navbar />
    <Hero />
    <Trending />
    <Create />
    <QnA />
    <Footer />
    
    </div>
  
  </div>

  )
}


export default about;
  