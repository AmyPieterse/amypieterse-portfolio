<template>
    <div class="container-fluid">
        <div class="row mb-5 mt-5 align-items">
            <div class="col-md-6 d-flex justify-content-center">
                <img src="https://i.postimg.cc/8zBsSBvn/profile.png" alt="About Image" class="img-fluid customImage">
            </div>
            <div class="col-md-6 d-flex flex-column gap-3 justify-content-center">
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
                    <button>Download Resume</button>
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
    .customSize{
        width:35rem;
    }
    #downloadResume button{
        text-decoration: none;
        background-color: #000;
        color: white;
        border: 2px solid #fff;
        border-radius: 2px;
        padding: 10px 20px;
    }
</style>
