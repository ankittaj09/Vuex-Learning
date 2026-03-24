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
 
}
</script>

<style>

body{
    font-family: Ubuntu;
    color: #555;
}
</style>
