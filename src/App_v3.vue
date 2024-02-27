<template>
  <div class="app-container">
    <header>
        <div>
          <Navbar/>
        </div>
        <div id="landing">
          <Home/>
        </div>
    </header>
    <main>
        <section>
          <About/>
        </section>
        <section id="skills">
          <Skills/>
          <article>
            <Badges/>
          </article>
        </section>
        <section id="work">
          <Project/>
        </section>
        <section id="experience">
          <Resume/>
        </section>
        <section id="contact">
          <article id="testimonial">
          <Testimonial/>
          </article>
          <Contact/>
        </section>
    </main>
    <footer>
        <FooterComp/>
    </footer>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar_v3.vue'
  import Home from '@/components/Home_v3.vue'
  import FooterComp from '@/components/FooterComp_v3.vue'
  import Resume from '@/components/Resume_v3.vue';
  import About from '@/components/About_v3.vue';
  import Project from '@/components/Project_v3.vue';
  import Testimonial from '@/components/Testimonial_v3.vue';
  import Contact from '@/components/Contact_v3.vue'
  import Skills from '@/components/Skills_v3.vue';
  import Badges from '@/components/Badges_v3.vue'
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
        Skills,
        Badges
}
  }
</script>

<style src="@/assets/CSS/style.css">


</style>

