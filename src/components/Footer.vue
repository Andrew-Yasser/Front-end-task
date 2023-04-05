<template>
    <div class="container">
        <div class="connect_text">Let's Connect</div>
        <div class="social_media_icons">
            <img class="icon" src="../assets/instagram_logo.png" alt="">
            <img class="icon" src="../assets/youtube_logo.png" alt="">
            <img class="icon" src="../assets/dribbble.png" alt="">
        </div>
        <div @click="()=>this.goToTop()" class="back_top_container">
            <div class="back_to_top_text">Back to Top</div>
            <img class="top_icon" src="../assets/up_arrow.png" alt="">
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Footer',
    components: {
    },
    props: [],
    methods: {
        goToTop:()=> {
            console.log("test")
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>
  
<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.connect_text {
    /* font-family: 'Poppins'; */
    font-weight: 600;
    font-size: 30px;
}

.social_media_icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130px;
}

.icon {
    width: 30px;
    cursor: pointer;
}

.back_top_container {
    display: flex;
    align-items: center;
    width: 130px;
    justify-content: space-between;
    cursor: pointer;
}

.back_to_top_text {
    /* font-family: 'Poppins'; */
    font-weight: 600;
    font-size: 17px;
}

.top_icon {
    width: 20px;
}
</style>