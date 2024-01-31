<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    
    <router-link to="/" class="navbar-brand">
      
    </router-link>

    <button class="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list text-light" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav ml-auto text-center">
        
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#work">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#testimonial">Testimonials</a>
        </li>
        <li class="nav-item m-auto">
          <div id="contactButton">
            <a href="#contact">Contact Me</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav{
  margin: 0;
  padding: 1rem;
}
.navbar{
  background-color: rgba(0, 0, 255, 0.03);
}
.navbar-nav .nav-link{
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 800;
  margin:0 10px;
  position: relative
}

.navbar-nav .nav-link:before,
.navbar-nav .nav-link:after
{
  content: "";
  position: absolute;
  height: 3px;
  width:0;
  background-color: var(--accent-color-1);
  transition: 0.5s;
}

.navbar-nav .nav-link:after{
  left: 0;
  bottom: -2px;
}
.navbar-nav .nav-link:before{
  right: 0;
  top:-2px;
}

nav .nav-link:hover{
  color: var(--accent-color-1);
}
nav .nav-link:hover:before,
nav .nav-link:hover:after
{
  width: 100%;
}


.navbar .navbar-toggler{
  border-color: transparent;
}

nav a.router-link-exact-active {
text-decoration: underline;
color: var(--secondary-color-1)!important;
}

#contactButton a{
    text-decoration: none;
    background-color: var(--accent-color-1);
    font-size:16px;
    font-weight: 600;
    text-align: center;
    color: white;
    border: 3px solid white;
    border-radius: 6px;
    padding: 14px 20px;
    position: relative;
}



@keyframes rotation{
  0% {--gradient-angle:0deg;}
  100% {--gradient-angle:360deg;}
}


#contactButton a:hover::before,
#contactButton a:hover::after{
    content: "";
    position: absolute;
    inset: -.3rem;
    background: conic-gradient(
      from var(--gradient-angle),
      var(--accent-color-1),
      var(--secondary-color-1),
      var( --button-color),
      var(--secondary-color-1),
      var(--accent-color-1)
    );
    border-radius: inherit;
    animation: rotation 2s linear infinite;
    z-index: -1;
}

#contactButton a::after{
  backdrop-filter: blur(.5rem);
}



@media (min-width: 992px){
  .navbar-expand-lg .navbar-collapse {
    display: flex ;
    flex-basis: auto;
    justify-content: end!important;
  }
  .navbar{
    padding: .8rem;
  }
  .navbar-nav{
    margin-right: 1rem;
  }
  
}  

@media (max-width: 992px){
  #contactButton a{
    display: none;
  }
}

@media (max-width: 576px){
    .navbar-nav .nav-link{
      font-size: 14px;
    }
}

</style>