<template>
    <header class="header">
        <h1 class="title">Hello?</h1>
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
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
};

</script>

<style>

</style>

