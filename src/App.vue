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
  import Navbar from '@/components/Navbar.vue'
  import Home from '@/components/Home.vue'
  import FooterComp from '@/components/FooterComp.vue'
  import Resume from '@/components/Resume.vue';
  import About from '@/components/About.vue';
  import Project from '@/components/Project.vue';
  import Testimonial from '@/components/Testimonial.vue';
  import Contact from '@/components/Contact.vue'
  import Skills from '@/components/Skills.vue';
  import Badges from '@/components/Badges.vue'
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

