
<template>
    
    <div class="navbar-container">
        <div class = "navbar">
            <div class = "btn_container">
                <NuxtLink class= "about_btn"  to="/about">About</NuxtLink>
                <div class="explore_btn"  type="button" onclick=" window.location.href='explore' " > Explore </div>
                <div class ="login_btn" type="button" onclick=" window.location.href='login' " > Login</div>
                <div class="create_btn" type="button" onclick=" window.location.href='create' " > Create</div>
                <div class="acc_pfp_btn" type="button" onclick=" window.location.href='account' "></div>
               
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
                                <span class="material-icons">manage_accounts</span>
                                <a href="#">My Profile</a>
                            </li>
                            <li>
                                <span class="material-icons">folder_special</span>
                                <a href="#">My Favorites</a>

                            </li>
                            <li>
                                <span class="material-icons">logout</span>
                                <a href="#">Log Out</a>

                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
</template>



<script setup>
    function menuToggle(){
        if (process.client) {
            const toggleMenu = document.querySelector('.menu');
            toggleMenu.classList.toggle('active');
        }

    }

</script>

<style scoped src="@/assets/styles/navbar.css"> </style>

