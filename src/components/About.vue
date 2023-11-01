<template>
    <div class="container-fluid">
        <div class="m-3">
            <h1 class="heading text-center text-uppercase">About Me</h1>
        </div>
        <div class="row mb-5 mt-5 align-content-center justify-content-center" id="aboutContainer">
            <div class="col-md-6 col-12 d-flex justify-content-end mr-2" id="imageContainer">
                <img src="https://i.postimg.cc/8zBsSBvn/profile.png" alt="About Image" class="img-fluid w-90 customImage">
            </div>
            <div class="col-md-6 col-12 d-flex flex-column justify-content-center align-content-center" id="summary">
                <div class="customSize">
                    <p>
                        I am currently expanding my skill set through the web development program at Life Choices Coding Academy.
                        As I work towards becoming a full-stack web developer, I'm driven by my strong passion for learning and my commitment to doing great work. My journey in the tech world is marked by my dedication to exploring new solutions and always striving to do better.   
                    </p>
                    <p>
                        I really enjoy math, solving problems, and creating augmented reality experiences. I'm also a big fan of logical thinking and don't like sticking to the same old ways of doing things. I believe in the power of not giving up and taking on challenging tasks. 
                    </p>
                    <p>
                        Furthermore, I have a passion for playing the guitar, challenging opponents in chess matches, and exploring new experiences, including trying out different new foods.
                    </p>
                    <p>
                        I'm excited to connect with professionals who share my values and interests and to use my skills and enthusiasm to make a difference in the tech industry. 
                    </p>
                </div>
                <div id="downloadResume" class="d-flex justify-content-center w-90">
                    <a href="https://drive.google.com/uc?export=download&id=1cMUB9dz3hHzdm4LQea8gmmIo733-msVD" class="btn btn-primary btn-sm">Download Resume</a>
                </div>
            </div>
            
            <div>
                <div class="m-3">
                    <h3 class="heading text-center text-uppercase"></h3>
                </div>
                <div id="skillsContainer">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
   
    #imageContainer{
       padding-right: 90px;
    }
    .customSize{
        width: 80%;
        padding-top: 3.5em;
    }
    .customImage{
        width: 400px;
        height : auto;
        align-self: center;
    }
    #downloadResume{
        width: 80%;
        margin-top: 1.25rem;
    }
    
    #downloadResume a{
        text-decoration: none;
        background-color: black;
        color: white;
        border: 2px solid #fff;
        border-radius: 6px;
        padding: 10px 20px;
    }

@media (max-width: 1024px) {
    .customSize{
        width: 90%;
    }
    .customImage{
        width: 375px;
        height : auto;
    }
}
@media (max-width: 990px) {
    #aboutContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
    
    #imageContainer{
        padding: 0;
        justify-content: center !important;
        align-items: center;
    }
    #summary{
        width: 80%;
        align-items: center;
        justify-content: center;
    }
    .customSize{
        text-align: center;
        padding-top: 0;
    }
    .customImage {
        width: 300px;
        height: auto;
    }

}

@media (max-width: 768px) {
    .customImage {
        width: 270px;
        height: auto;
    }
    #summary{
        width: 95%;
    }

    #downloadResume {
        text-align: center;
    }
}

@media (max-width: 576px) {

    #downloadResume a {
    font-size: var(--fs-400);
    padding: 8px 16px;
    }
    .customImage{
        width: 200px;
        height : auto;
    }
    .customSize p{
        font-size: 14px;
    }

}
</style>