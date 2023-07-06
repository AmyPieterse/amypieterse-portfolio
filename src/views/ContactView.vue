<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center mt-5">
            <h2 class="text-center">Get in Touch!</h2>
        </div>
        <div class="row row d-flex justify-content-center mt-2">
            <ContactForm/>
        </div>
        <div class="row d-flex justify-content-center mt-5">
            <SocialLinks/>
        </div>
    </div>
</template>

<script>
    import ContactForm from '@/components/ContactForm'
    import SocialLinks from '@/components/SocialLinks'
    export default {
        components:{
            ContactForm,
            SocialLinks
        }
    }
</script>

<style scoped>

</style>