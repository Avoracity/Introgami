import "../assets/styles/trending.css";
import "../assets/styles/global.css";
import React from "react";
import Card from "./Card";

function Trending() {
    return (
        <div>
        <div className="trending">
            <div className = "trending-container">
    
                <div className="trending-title">
                        <div className="text-center font-bold text-2xl mb-2">Top Six Designs </div>
                </div>
    
                    <div className = "trending_wrapper">
            
                        <Card/>
                        <Card/>
      
                    </div>
           
    
    
            </div>
        </div>
        
    </div>
            
    )
}


export default Trending;


