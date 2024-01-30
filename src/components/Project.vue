<template>
   <div>
        
        <h1 class="heading">Recent Work</h1>
        
        <div id="projectContainer">
           <div data-aos="zoom-in" class="projectCard mb-md-4" v-for="(project) in projects" :key="index">
                    <div class="websiteScreenshot">
                        <img :src="project.image" class="card-img-top imageStyle" alt="Project Image" loading="lazy">
                    </div>          
                    <div class="websiteDetails">
                       <h3>{{project.title}}</h3>
                       <div class="descriptionContainer">
                        <p id="description">{{project.description}}</p>
                       </div>
                       <p>{{project.technologies}}</p>
                       <div class="buttons">
                            <a id="sectionButton" :href="project.githubLink">See Code</a>
                            <a id="sectionButton" :href="project.Link">Visit Live Site</a>
                       </div>
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
  
    #projectContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .projectCard{
        display: grid;
        max-width: 1200px;
        background-color: var(--color-1);
        width: 100%;
        align-items: center;
        padding: 3.5em;
        margin: 1em;
    }
    .projectCard:nth-child(odd){
        grid-template-columns: 60% 40%;
    }
    .projectCard:nth-child(even){
        grid-template-columns: 60% 40%;
        direction: rtl;
    }
    .projectCard:nth-child(odd) .descriptionContainer{
        position: relative;
        z-index: 3;
        margin-left: -150px;
        height: max-content;
    }
    .projectCard:nth-child(even) .descriptionContainer{
        position: relative;
        z-index: 3;
        margin-right: -150px;
        height: max-content;
    }
    .projectCard:nth-child(odd) .websiteDetails{
        text-align: right;
    }
    .projectCard:nth-child(even) .websiteDetails{
        text-align: left;
    }
    .projectCard:nth-child(odd) .websiteScreenshot{
        box-shadow: -4px 2px 6px 1px rgb(255, 255, 255, 0.4);
    }
    .projectCard:nth-child(even) .websiteScreenshot{
        box-shadow: 4px 2px 6px 1px rgb(255, 255, 255, 0.4);
    }
    .websiteScreenshot{
        max-width: 600px;
        max-height: 300px;
        background-color: var(--accent-color-1);
        z-index: 1;
        position: relative;
    }
    .websiteDetails{
        max-width: 100%;
    }
    .imageStyle{
        max-width: 100%;
        height: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center top;
        overflow: hidden;
    }
    .descriptionContainer{
        z-index: 2;
        background-color: var(--secondary-color-1);
        border-radius: 6px;
        padding: 1em;
    }

    #sectionButton{
        text-decoration: none;
        background-color: var(--accent-color-1);
        font-size:16px;
        font-weight: 600;
        text-align: center;
        color: white;
        border: 3px solid white;
        border-radius: 6px;
        padding: 10px 16px;
        margin-left: 1rem;
    }

    @media (max-width: 1000px) {
        .websiteScreenshot{
            width: 100%;
            height: 100%;
            box-shadow: -2px 2px 2px 2px rgb(255, 255, 255, 0.4)!important;
        } 
        .projectCard{
            display: flex;
            flex-direction: column;
            max-width: 800px;
            width: 100%;
        }
        .websiteDetails{
            text-align: center !important;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 36rem;
        }
        .websiteDetails h3{
            font-size: 22px;
            margin: 24px 0px 18px
        }
        .websiteDetails p{
            font-size: 16px;
            margin: 6px 0px 12px
        }
        .projectCard div{
           direction: ltr;
        }
        .projectCard:nth-child(odd) .descriptionContainer{
            margin-left: 0px;
            height: max-content;
        }
        .projectCard:nth-child(even) .descriptionContainer{
            margin-right: 0px;
            height: max-content;
        }
        #description{
            font-size: 14px;
        }
        #sectionButton{
            font-size:12px;
            font-weight: 500;
            padding: 8px 14px;
            margin: 0;
        }
        .buttons{
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
    }   
    @media (max-width: 768px) {
        
        .descriptionContainer{
            max-width: 100%;      
        }
    }

    @media (max-width: 576px) {
        .websiteScreenshot{
            max-width: 100%;
            height: 100%;
            box-shadow: -2px 2px 2px 2px rgb(255, 255, 255, 0.4)!important;
        } 
        .projectCard{
            display: flex;
            flex-direction: column;
            max-width: 800px;
            width: 100%;
            padding: 1em;
        }
        .websiteDetails{
            text-align: center !important;
            padding: 0;
            max-width: 100%;
        }
        .websiteDetails h3{
            font-size: 22px;
            margin: 24px 0px 18px
        }
        .websiteDetails p{
            font-size: 16px;
            margin: 6px 0px 12px
        }
        .projectCard div{
           direction: ltr;
        }
        .projectCard:nth-child(odd) .descriptionContainer{
            margin-left: 0px;
            height: max-content;
        }
        .projectCard:nth-child(even) .descriptionContainer{
            margin-right: 0px;
            height: max-content;
        }
        .descriptionContainer{
            max-width: 100%;
        }
        #description{
            font-size: 14px;
        }
        #sectionButton{
            font-size:12px;
            font-weight: 500;
            padding: 8px 14px;
            margin: 0;
        }
        .buttons{
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
       
}



</style>
