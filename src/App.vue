<template>
  <Navbar class="container-fluid"/>
  <main class="container-fluid">
    <router-view/>
  </main>
  <FooterComp class="container-fluid"/>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import FooterComp from '@/components/FooterComp.vue'
  export default{
      components:{
        Navbar,
        FooterComp
      }
  }
</script>

<style src="./assets/CSS/style.css">
</style>

