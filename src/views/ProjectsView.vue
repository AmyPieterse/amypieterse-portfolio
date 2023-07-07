<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
        <Project/>
        </div>
    </div>
</template>

<script>
    import Project from '@/components/Project.vue';
    export default {
        components:{
            Project
        }
    }
</script>

<style scoped>

.container-fluid{
    min-height: 100vh;
    display: flex;
    align-items: center;
}
    
</style>