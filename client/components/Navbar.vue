<template>
    <div class="Navbar Container">
        <div class = "navbar">
            <div class = "btn_container">
                <div class= "about_btn"  type="button" onclick=" window.location.href='index.vue' " > About</div>
                <div class="explore_btn"> Explore </div>
                <div class ="login_btn"> Login</div>
                <div class="create_btn"> Create</div>
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

