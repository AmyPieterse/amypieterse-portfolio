<template>
    <div class="backgroundContainer">
        
    </div>
</template>

<script>
    import * as THREE from 'three';
    export default {
        data() {
            return {
            scene: null,
            camera: null,
            renderer: null,
            };
        },
        mounted(){
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(
                75, 
                window.innerWidth/window.innerHeight,
                0.1,
                1000
            );
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setSize(window.innerWidth, window.innerHeight);
            this.$el.querySelector('.backgroundContainer').appendChild(renderer.domElement);
        }  
    }
</script>

<style scoped>
    canvas{
        width: 100%;
        height: 100%;
    }
</style>