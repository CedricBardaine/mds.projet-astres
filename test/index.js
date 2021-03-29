import Vue, { Component }  from "vue"; 
import Vuetify from "vuetify"; 

// Using shallowMount won't mount Vuetify sub-components 
// but it will read components name and throw an error if they are not found.
Vue.use(Vuetify);