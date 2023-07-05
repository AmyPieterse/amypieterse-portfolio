<template>
    <div id="testimonialCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>

        <div class="carousel-inner">
            
            <div v-for="testimonial in testimonials" :key="testimonial.id" class="carousel-item" :class="{active: testimonials.indexOf(testimonial) === 0}" data-bs-interval="10000">
                <div class="d-flex justify-content-center align-items-center text-center h-100">
                    <div class="testimonial h-100">
                        <div class="person">
                            <img :src="testimonial.image" class="img-fluid" :alt="testimonial.name">
                            <h5>{{testimonial.name}}</h5>
                        </div>
                        <div class="content w-50 m-auto">
                            <p>{{testimonial.testimonial}}</p>
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
</template>

<script>
    export default {
        computed:{
            testimonials(){
                return this.$store.state.testimonials
            }
        },
        mounted(){
            this.$store.dispatch('fetchTestimonial')
        }
    }
</script>

<style scoped>
#testimonialCarousel{
    height: 70vh;
    
}
.carousel-inner{
    max-width: 100%;
}

.carousel-item img{
    max-width: 200px;
}
</style>