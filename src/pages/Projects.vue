<template>
    <div>
        <div class="title">Our Projects</div>
        <TabsWidget class="tabs_widget"/>
        <JobAdvertisement class="job_advertismenet"/>
        <Footer class="footer"/>
    </div>
</template>
  
<script>
import TabsWidget from '@/components/TabsWidget.vue';
import JobAdvertisement from '@/components/JobAdvertisement.vue';
import Footer from '@/components/Footer.vue'; 

export default {
    name: 'Projects',
    components: {
        TabsWidget,
        JobAdvertisement,
        Footer
    }
}
</script>
  
<style scoped>
.title {
    /* font-family: 'Poppins'; */
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    width: 18%;
    text-align: left;
    margin-left: 4vw;
    margin-bottom: 32px;
}

.tabs_widget{
    margin-left: 4vw;
    margin-right: 4vw;
}

.job_advertismenet{
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 100px;
    margin-bottom: 120px;
}

.footer{
    margin-left: 4vw;
    margin-right: 4vw;
    padding-bottom: 40px;
}
</style>