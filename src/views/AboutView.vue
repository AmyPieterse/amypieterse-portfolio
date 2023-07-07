<template>
    <div class="container-fluid">
        <div class="row mb-5 mt-5 align-items">
            <div class="col-md-6 col-12 d-flex justify-content-center">
                <img src="https://i.postimg.cc/8zBsSBvn/profile.png" alt="About Image" class="img-fluid customImage">
            </div>
            <div class="col-md-6 col-12 d-flex flex-column gap-3 justify-content-center">
                <div class="customSize">
                    <p>
                    Driven by a commitment to continuous learning and fueled by a passion for creative problem-solving, I aspire to craft captivating websites that transcend reality and push boundaries.
                    </p>
                    <p>
                    Drawing inspiration from the vast landscapes of science fiction and video games
                    </p>
                    <p>
                    I am currently expanding my skill set through the immersive web development program at Life Choices Coding Academy.
                    </p>
                </div>

                <div id="downloadResume">
                    <a href="https://drive.google.com/uc?export=download&id=1cMUB9dz3hHzdm4LQea8gmmIo733-msVD" class="btn btn-primary btn-sm">Download Resume</a>
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
    .customImage{
        width:20rem;
    }
    
    #downloadResume a{
        text-decoration: none;
        background-color: #000;
        color: white;
        border: 2px solid #fff;
        border-radius: 2px;
        padding: 10px 20px;
    }

@media (max-width: 768px) {
    
    .customImage {
        width: 100%;
        max-width: 250px;
        margin-bottom: 1.5rem;
    }


    #downloadResume {
        text-align: center;
    }
}

@media (max-width: 576px) {

    #downloadResume a {
    font-size: 12px;
    padding: 8px 16px;
    }
}
</style>
