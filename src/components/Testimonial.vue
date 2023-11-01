<template>
  <div class="container-fluid">
      <div class="row">
        <div class="carousel-container" >
    <div
      id="testimonialCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="carousel-item" :class="{ active: testimonials.indexOf(testimonial) === 0 }" data-bs-interval="10000">
          <div class="d-flex justify-content-center align-items-center text-center h-100 caro-inner">
            <div class="testimonial h-100">
              <div class="person">
                <div class="image m-auto">
                <img :src="testimonial.image" class="img-fluid" :alt="testimonial.name"/>
                </div>
                <h5>{{ testimonial.name }}</h5>
              </div>
              <div class="content w-50 m-4">
                <p>{{ testimonial.testimonial }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div> 
      </div>
  </div>
</template>


<script>
export default {
    computed: {
    testimonials() {
        return this.$store.state.testimonials;
    },
    },
    mounted() {
    this.$store.dispatch("fetchTestimonial");
    },
};
</script>

<style scoped>

h5{
  margin-top: .4rem;
}
.carousel-container{
    width: 100%;
    height: 85.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#testimonialCarousel {
    height: 70vh;
}
.carousel-inner {
  height: 70vh;
}
.carousel-dark .carousel-control-prev-icon, .carousel-dark .carousel-control-next-icon {
  color: var(--text-color);
}
.testimonial{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: max-content;
}
.caro-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 30rem ;
}
.image{
    width: 15rem;
    object-fit: cover;
    object-position: center;
}
.image img {
  width: 100%;
  height: 100%;
}
</style>