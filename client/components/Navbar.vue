
<template>
    
 <div class="navbar">
    <div class="navbar-container">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
        <div class = "navbar">
            <div class = "btn_container">
                <NuxtLink class= "about_btn"  to="/about">About</NuxtLink>
                <div class="explore_btn"  type="button" onclick=" window.location.href='explore' " > Explore </div>
                <div class ="login_btn" type="button" onclick=" window.location.href='login' " > Login</div>
                
                <div class="create_btn frame-btn__solid frame-btn__text" type="button" onclick=" window.location.href='create' " > Create</div>
        

                <div class="acc_pfp_btn" type="button" onclick=" window.location.href='account' "> </div>
               
                <div class="action" >
                    <div class="profile" @click="menuToggle">
                        <img src="@/assets/images/plaid-pattern-sundae.png" alt="">
                    </div>

                    <div class="menu">
                        <h3>
                            User Account
                            <div>
                                Op text
                            </div>
                        </h3>
                        <ul>
                            <li>
                                <span class="material-icons icons-size">manage_accounts</span>
                                <a href="#">My Profile</a>
                            </li>
                            <li>
                                <span class="material-icons icons-size">folder_special</span>
                                <a href="#">My Favorites</a>

                            </li>
                            <li>
                                <span class="material-icons icons-size">logout</span>
                                <a href="#">Log Out</a>

                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
 </div>
</template>



<script setup lang="ts">
    
    function menuToggle(): void {
        
            const toggleMenu: any  = document.querySelector('.menu');
            toggleMenu.classList.toggle('active');
        

    }

</script>

<style lang="css" scoped> 
@import "@/assets/styles/navbar.css";
@import "@/assets/styles/global.css";

</style>