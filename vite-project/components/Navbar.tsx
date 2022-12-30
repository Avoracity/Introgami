import "../assets/styles/navbar.css";
import "../assets/styles/global.css";
import React from 'react';

function Navbar() {
  const handleExploreClick = () => {
    window.location.href = '/explore';
  }

  const handleAboutClick = () => {
    window.location.href = '/about';
  }

  const handleCreateClick = () => {
    window.location.href = '/create';
  }

  const handleLoginClick = () => {
    window.location.href = '/login';
  }

  const handleAccountClick = () => {
    window.location.href = '/account';
  }

  const handleMenuToggle = () => {
    const toggleMenu = document.querySelector('.menu');
    if (toggleMenu) {
        toggleMenu.classList.toggle('active');
      }
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <script src="https://kit.fontawesome.com/ce1079a0f3.js" crossOrigin="anonymous"></script>
          <div className="navbar">
            <div className="btn_container">
              <button className="about_btn" onClick={handleAboutClick}>About</button>
              <button className="explore_btn" type="button" onClick={handleExploreClick} > Explore </button>
              <button className="login_btn" type="button" onClick={handleLoginClick} > Login</button>
              <button className="create_btn frame-btn__solid frame-btn__text" type="button" onClick={handleCreateClick} > Create </button>
              <button className="acc_pfp_btn" type="button" onClick={handleAccountClick}> </button>
              <div className="action" >
                <div className="profile" onClick={handleMenuToggle}></div>
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
  );
}

export default Navbar;


