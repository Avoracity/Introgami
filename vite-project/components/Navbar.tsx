import "../assets/styles/navbar.css";
import "../assets/styles/global.css";
import React from 'react';

function Navbar() {
    const handleExploreClick = () => {
        window.location.href = '/explore';
      }

   return (
    <div>
        <div className="navbar">
            <div className="navbar-container">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <script src="https://kit.fontawesome.com/ce1079a0f3.js" crossOrigin="anonymous"></script>
                <div className = "navbar"> 
                    <div className = "btn_container">
                        <button className= "about_btn"  to="/about">About</button>
                        <button className="explore_btn"  type="button" onClick={handleExploreClick} > Explore </button>
                        <button className ="login_btn" type="button" on click=" window.location.href='login' " > Login</button>
                    
                        <button className="create_btn frame-btn__solid frame-btn__text" type="button" onClick=" window.location.href='create' " > Create </button>
            
    
                        <button className="acc_pfp_btn" type="button" onclick=" window.location.href='account' "> </button>
                    
                        <div className="action" >
                            <div className="profile" onClick="menuToggle"></div>
                            <img src="@/assets/images/plaid-pattern-sundae.png" alt=""></img>
                        </div>
    
                        <div className="menu">
                            <h3>
                                User Account
                                <div>
                                    Op text
                                </div>
                            </h3>
                            <ul>
                                <li>
                                    <span className="material-icons icons-size">manage_accounts</span>
                                    <a href="#">My Profile</a>
                                </li>
                                <li>
                                    <span className="material-icons icons-size">folder_special</span>
                                    <a href="#">My Favorites</a>
    
                                </li>
                                <li>
                                    <span className="material-icons icons-size">logout</span>
                                    <a href="#">Log Out</a>
    
                                </li>
    
                            </ul>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
        
        </div>
   ) 
}

function menuToggle(): void {
        
        const toggleMenu: any  = document.querySelector('.menu');
        toggleMenu.classList.toggle('active');
    

}
export default Navbar;



