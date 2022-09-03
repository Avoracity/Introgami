<template>
    <div class="navbar-container">
        <div class = "navbar">
            <div class = "btn_container">
                <NuxtLink class= "about_btn"  to="/about">About</NuxtLink>
                <div class="explore_btn"  type="button" onclick=" window.location.href='explore' " > Explore </div>
                <div class ="login_btn" type="button" onclick=" window.location.href='login' " > Login</div>
                <div class="create_btn" type="button" onclick=" window.location.href='create' " > Create</div>
                <div class="acc_pfp_btn" type="button" onclick=" window.location.href='account' "></div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'AppHeader'
};

</script>

<style scoped src="@/assets/styles/navbar.css"> </style>

