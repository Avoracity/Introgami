<template>
    <div class="login-container">

        <!-- left side -->
        <div class = "login-img-wrapper">
            <section class="copy">
                <h1> Explore your creativity</h1>
                <p> letters for introverts</p>
            </section>
        </div>

        <!-- right side -->
       
        <div class = "login-info-wrapper">
            <form>
                <section class="copy">
                    <h2> Sign Up</h2>
                    <div class="login-box">
                        <p>Already have an account? <a href="#">
                        <strong>Log In</strong></a></p>
                    </div>
                </section>

                <div class="input-container name">
                    <label for="fname">Full Name</label>
                    <input id="fname" name="fname" type="text">
                </div>

                <div class="input-container email">
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email">
                </div>

                <div class="input-container password">
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password">
                    <i class="far fa-eye-slash"></i>
                </div>

                <div class="input-container cta">
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        Sign up for email updates
                    </label>
                </div>
                <button class="signup-btn" type="submit"> Sign Up</button>
                <section class="copy legal">
                    <p><span class ="small"> By continuing, you agree to accept our <br> <a href="#">Privacy Policy
                        </a> &amp; <a href="#">Terms of Service</a>.</span></p>           
                </section>
            
  
            
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'AppHeader'
};

</script>

<style scoped src="@/assets/styles/login.css"> </style>

