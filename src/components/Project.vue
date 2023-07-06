<template>
        <div v-for="project in projects" :key="project.id" class="col-md-3 g-2 d-flex justify-content-center">
            <div class="card d-flex justify-content-center">
                <img :src="project.image" class="card-img-top imageSize" alt="Project Image">
                <div class="card-body">
                    <h5 class="card-title">{{project.title}}</h5>
                    <p class="card-text">{{projects.description}}</p>
                    <a href={{projects.netlifyLink}} class="btn btn-primary">View Website</a>
                    <a href="{{projects.githubLink}}" class="btn btn-secondary">Github Link</a>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        computed:{
            projects(){
                return this.$store.state.projects
            }
        },
        mounted(){
            this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>
    .card{
        width: 17rem;
        height: 19rem;
    }
    

    @media screen and (width<1400px) {
        
    }

</style>