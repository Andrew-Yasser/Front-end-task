<template>
    <div class="button_container">
        <img class="logo" :src=logoSrc alt="">
        <div class="button_text">{{ text }}</div>
    </div>
</template>
  
<script>
// import PrimaryButton from './PrimaryButton.vue';
export default {
    name: 'JobAdvertisement',
    components: {
        // PrimaryButton
    },
    props:[
        'text',
        'logoSrc'
    ]
}
</script>
  
<style scoped>
.button_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 16px 45px 12px 45px;
    background-color: white;
    box-shadow: 0px 0.927421px 1.92354px rgba(0, 0, 0, 0.00974257);
}

.button_text{
    color: black;
    font-weight: 600;
    font-size: 16px;
    text-align: left;
}

.logo{
    width: 20px;
}

</style>