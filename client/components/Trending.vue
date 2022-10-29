<template>
    <div class="trending-container">
        <div class = "trending">

            <div class="trending-title">
                    <div class="text-center font-bold text-2xl mb-2">Top Six Designs </div>
            </div>

     
    
            <div class="cardboard_container">
                <div class = "trending_wrapper">
        
                    <Card />
                    <Card />
                    <Card />
                    
                    <Card />
                    <Card />
                    <Card />     
                </div>
            </div>


        </div>
    </div>
    
</template>

<script>
export default {
    name: 'AppHeader'
};

</script>

<style lang="css" scoped> 
@import "../assets/styles/trending.css";
@import "../assets/styles/global.css";

</style>
