<template>
  <div id="product-list-one">
    <h1>Product List One</h1>
    <ul>
      <li v-for="item in saleProduct" :key="item.name">
        <span class="name">{{ item.name }}</span>
        <span class="price"> ₹ {{ item.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice(5)">Reduce Price</button>
  </div>
</template>

<script>

export default {
  name: 'product1',
  
  computed:{
    product(){
    return this.$store.state.product;
  },
  saleProduct(){
      return this.$store.getters.saleProduct;
    }
  },
  methods:{
    reducePrice(amount){
      // this.$store.state.product.forEach(product => {
      //   product.price -= 1;        
      // }); in strict mode true we cannot do mutation data on function calling inside a component
      // return this.$store.commit('reducePrice');
      this.$store.dispatch('reducePrice',amount);
    }
  }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
