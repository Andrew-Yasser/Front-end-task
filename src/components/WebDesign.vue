<template>
    <div class="container">
        <img class="img" :src=imgSrc  />
        <div class="title">{{title}}</div>
        <div class="actions">
            <div class="action_container">
                <img class="action_logo" src="../assets/view_study_logo.png">
                <div class="action_text">View Study Case</div>
            </div>
            <div class="action_container">
                <img class="action_logo" src="../assets/live_preview_logo.png">
                <div class="action_text">Live Preview</div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'WebDesign',
    props:[
        'title',
        'imgSrc'
    ],
    components: {
    }
}
</script>
  
<style scoped>
.container {
    cursor: pointer;
    width: 100%;
    height: 100%;
}

.img {
    width: 100%;
}

.title {
    /* font-family: 'Poppins'; */
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: left;
    margin-top: 16px;
}

.actions {
    display: flex;
    align-items: center;
}

.action_container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10%;
    margin-top: 8px;
}

.action_logo{
    width: 15px;
    margin-right: 15px;
}

</style>