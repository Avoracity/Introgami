import "../assets/styles/login.css";
import "../assets/styles/global.css";
import React from 'react';

function Login () {
    return (
        <div>
            <div className="login">
                <div className="login-container">

        <div className = "login-img-wrapper">
            <section className="copy">
                <h1> Explore your creativity</h1>
                <p> letters for introverts</p>
            </section>
        </div>
   
        
        <div className = "login-info-wrapper">
            <form>
                <section className="copy">
                    <h2> Sign Up</h2>
                    <div className="login-box">
                        <p>Already have an account? <a href="#">
                        <strong>Log In</strong></a></p>
                    </div>
                </section>
        
                <div className="input-container name">
                    <label htmlFor="fname">Full Name</label>
                    <input id="fname" name="fname" type="text"></input>
                </div>
        
                <div className="input-container email">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email"></input>
                </div>
        
                <div className="input-container password">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password"></input>
                    <i className="far fa-eye-slash"></i>
                </div>
        
                <div className="input-container cta">
                    <label className="checkbox-container">
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                        Sign up for email updates
                    </label>
                </div>
                <button className="signup-btn" type="submit"> Sign Up</button>
                <section className="copy legal">
                    <p><span className ="small"> By continuing, you agree to accept our <br></br> <a href="#">Privacy Policy
                        </a> &amp; <a href="#">Terms of Service</a>.</span></p>           
                </section>
            
        
            
            </form>
        </div>
        </div>
        
            </div>
          
        </div>
    )
}

export default Login;


