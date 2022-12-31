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
        <div className="about_btn" onClick={handleAboutClick}>About</div>
        <div className="explore_btn" onClick={handleExploreClick} > Explore </div>
        <div className="login_btn"  onClick={handleLoginClick} > Login</div>
        <div className="create_btn frame-btn__solid frame-btn__text"  onClick={handleCreateClick} > Create </div>
        <div className="acc_pfp_btn" onClick={handleAccountClick}> </div>

        <div className="action" >
          <div className="profile" onClick={handleMenuToggle}>
            <img src="../assets/images/plaid-pattern-sundae.png" alt=""></img>
          </div>
        </div>
      </div>
      <div className="menu-container">
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


