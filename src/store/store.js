import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict:true,
  state: {
    product: [
      { name: "Banana", price: 20 },
      { name: "capsicum", price: 40 },
      { name: "carrot", price: 60 },
      { name: "Potato", price: 100 }
    ]
  },
  getters:{
    saleProduct:state=>{
      let saleProduct = state.product.map(product=>{
        return{
          name:"**"+product.name+"**",
          price:product.price/2
        }
      });
      return saleProduct;
    }
  },
  mutations:{
    reducePrice:(state,payload)=>{
      
       state.product.forEach(product => {
       product.price -= payload;        
      });
    
  }
  },
  actions:{
    reducePrice:(context,payload)=>{
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },4000)
      
    }
  }
});