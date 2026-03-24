<template>
  <div id="app">
    <productListOne :product="product"/>
    <productListTwo :product="product"/>
  </div>
</template>

<script>
import productListOne from './components/productListOne.vue';
import productListTwo from './components/productListTwo.vue';

export default {
  name: 'App',
  components: {
    productListOne,
    productListTwo
  },
  data(){
    return{
      product:[
        {name:'Banana',price:20},
        {name:'capsicum',price:40},
        {name:'carrot',price:60},
        {name:'Potato',price:100}
      ]
    }
  }
}
</script>

<style>

body{
    font-family: Ubuntu;
    color: #555;
}
</style>
