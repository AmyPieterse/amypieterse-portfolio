import { createStore } from 'vuex'
const dataURL = ("https://amypieterse.github.io/json-data-repo/data.json")

export default createStore({
  state: {
    resume:null,
    projects:null,
    testimonials:null,
  },
  getters: {
  },
  mutations: {
    setResume(state, resume){
      state.resume = resume
    },
    setProjects(state,projects){
      state.projects = projects
    },
    setTestimonial(state,testimonials){
      state.testimonials = testimonials
    },
  },
  actions: {
    async fetchResume(context){
      try{
        let res = await fetch(dataURL)
        let {resume} = await res.json()
        console.log(resume);
        if (resume) {
          context.commit('setResume',resume)
        }
      }
      catch (e){
        console.log(e.message);
      }
    },
    async fetchProjects(context){
      try {
        let res = await fetch(dataURL);
        let {projects}= await res.json();
        if (projects){
          context.commit('setProjects', projects)
        }
      } catch (e){
        console.log(e.message); 
      }
    },
    async fetchTestimonial(context){
        try {
          let res = await fetch(dataURL);
          let {testimonials}= await res.json();
          console.log(testimonials);
          if (testimonials){
            context.commit('setTestimonial', testimonials)
          }
        } catch (e){
          console.log(e.message); 
        }
    }
  },
  modules: {
  }
})
