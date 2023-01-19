
<template>
    
 <div class="navbar">
    <div class="navbar-container">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
        <div class = "navbar">
            <div class = "btn_container">
                <RouterLink class="about_btn text-white hover:text-white no-underline" to="/about">About</RouterLink>
    <RouterLink class="explore_btn text-white hover:text-white no-underline" to="/explore">Explore</RouterLink>
    <RouterLink class="login_btn text-white hover:text-white no-underline" to="/login">Login</RouterLink>
    <RouterLink class="create_btn text-white hover:text-white no-underline" to="/create">Create</RouterLink>
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