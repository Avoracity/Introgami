<template>
    <div class="Hero Container">
        <h1 class="header">Hello?</h1>
        <button class="button btn"> First button </button>
        <div class = "chat-notification"> miao </div>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/george'> George</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/about'> About</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
};

</script>

<style scoped src="@/assets/styles/hero.css"> </style>

