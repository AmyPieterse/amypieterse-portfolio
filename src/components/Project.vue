<template>
        <div v-for="project in projects" :key="project.id" class="col-md-3 mb-3 d-flex align-items-center">
            <div class="card d-flex justify-content-center">
                <img :src="project.image" class="card-img-top imageSize" alt="Project Image">
                <div class="card-body">
                    <h5 class="card-title">{{project.title}}</h5>
                    <p class="card-text">{{projects.description}}</p>
                    <div class="d-flex justify-content-between">
                    <a href={{projects.netlifyLink}} class="btn btn-primary btn-sm">View Website</a>
                    <a href="{{projects.githubLink}}" class="btn btn-secondary btn-sm">Github Link</a>
                    </div>
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

.card {
    width: 18rem;
    border: 1px solid #rgb(221, 221, 221);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

.card-body {
    padding: 1.25rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-text {
    margin-bottom: 1rem;
}


</style>