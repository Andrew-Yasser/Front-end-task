<template>
    <div class="container">
        <img class="logo" src="../assets/logo.png" />
        <div class="routes_container">
            <div class="route" v-for="route in routes">{{ route.text }}</div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'NavigationBar',
    data() {
        return {
            routes: [
                {
                    text: 'Home',
                    src: '/'
                },
                {
                    text: 'About',
                    src: '/about'
                },
                {
                    text: 'Projects',
                    src: '/projects'
                },
                {
                    text: 'Contact',
                    src: '/contact'
                },
            ]
        }
    },
    components: {
    }
}
</script>
  
<style scoped>
.container {
    padding-top: 25px;
    display: flex;
    justify-content: space-between;
    margin-left: 4vw;
    margin-right: 4vw;
    align-items: center;
    margin-bottom: 40px;
}

.logo {
    width: 55px;
}

.routes_container {
    display: flex;
    width: 35%;
    align-items: center;
    justify-content: space-between;
}

.route {
    /* font-family: 'Poppins'; */
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #2F2F2F;

}
</style>