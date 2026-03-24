import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.store({
  state:{
    product:[
        {name:'Banana',price:20},
        {name:'capsicum',price:40},
        {name:'carrot',price:60},
        {name:'Potato',price:100}
      ]
  }
})