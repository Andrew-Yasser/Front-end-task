<script setup>
import email from '../assets/email.png'
</script>


<template>
    <div class="container">
        <div class="job_text">Interested working with me?</div>
        <PrimaryButton :logoSrc=email class="job_button" text='Email Me'/>
    </div>
</template>
  
<script>
import PrimaryButton from './PrimaryButton.vue';
export default {
    name: 'JobAdvertisement',
    components: {
        PrimaryButton
    }
}
</script>
  
<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 25px;
    height: 180px;
    background-color: #EEBF63;
    padding-left: 4vw;
    padding-right: 4vw;
}

.job_text{
    color: white;
    font-weight: 600;
    font-size: 48px;
    text-align: left;
    width: 29%;
}

.job_button{
   width: 100px; 
}

</style>