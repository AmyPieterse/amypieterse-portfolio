<template>
    <header>
        <div>
          <Navbar/>
        </div>
        <div id="landing">
          <Home/>
        </div>
    </header>
    <main class="container-fluid">
        <section id="work">
          <Project/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="testimonial">
          
        </section>
        <section id="contact">
          <Contact/>
        </section>
    </main>
    <footer>
        <FooterComp/>
    </footer>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Home from '@/components/Home.vue'
  import FooterComp from '@/components/FooterComp.vue'
  import Resume from '@/components/Resume.vue';
  import About from '@/components/About.vue';
  import Project from '@/components/Project.vue';
  import Testimonial from '@/components/Testimonial.vue';
  import Contact from '@/components/Contact.vue'
  import threeBackground from './components/threeBackground.vue';
    export default{
      components:{
        Navbar,
        Home,
        FooterComp,
        Resume,
        About,
        Project,
        Testimonial,
        Contact,
        threeBackground
}
  }
</script>

<style src="@/assets/CSS/style.css">

</style>

