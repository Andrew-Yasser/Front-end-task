<script setup>
import Picture1 from '../assets/Picture1.png'
import Picture2 from '../assets/Picture2.png'
import Picture3 from '../assets/Picture3.png'
import Picture4 from '../assets/Picture4.png'

</script>

<template>
    <div class="container">
        <div class="tabs_container">
            <div class="tab active_tab">Web Design</div>
            <div class="tab">Mobile App Design</div>
            <div class="tab">Freebies</div>
        </div>
        <div class="web_designs_container">
            <WebDesign  v-for="design, index in webDesigns" :key="index" :imgSrc=design.imgSrc :title=design.text class="web_design"/>
        </div>
    </div>
</template>
  
<script>
import WebDesign from '@/components/WebDesign.vue';
export default {
    name: 'TabsWidget',
    data() {
        return {
            webDesigns: [
                {
                    text: 'Minify - Web Design',
                    imgSrc: Picture4
                },
                {
                    text: 'Ant - Personal Portofolio',
                    imgSrc: Picture3
                },
                {
                    text: 'Lumy - Dashboard Ui Kit',
                    imgSrc: Picture1
                },
                {
                    text: 'Keeper -Soccer Site',
                    imgSrc: Picture2
                },
            ]
        }
    },
    props:[
    ],
    components: {
        WebDesign
    },
}
</script>
  
<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.tabs_container{
    display: flex;
    align-items: center;
}

.tab{
    /* font-family: 'Poppins'; */
    font-size: 28px;
    font-weight: 600;
    color: #828282;
    margin-right: 75px;
    margin-bottom: 35px;
    cursor: pointer;
}
.active_tab{
    color: #EEBF63;
    border-bottom: 5px solid #EEBF63;

}

.web_designs_container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 17%;
    grid-row-gap: 50px;
    margin-left: auto;
    margin-right: auto;
}

.web_design{
    /* height: 114px; */
    width: 37vw;
    
}
</style>