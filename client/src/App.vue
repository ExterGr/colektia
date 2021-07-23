<template>
  <Header />
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
#app {
  text-align: center;
}

* {
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
}
body {
  min-height: 100%;
  position: relative;
  min-height: 100vh;
}
</style>
