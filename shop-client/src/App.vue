<template>
  <div id="app">
 
    <router-view/>
    <FooterGuide v-show="$route.meta.FooterGuide"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {mapActions} from 'vuex'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  
  mounted(){
   // this.$store.dispatch('getAddress')
   this.getAddress()
   this.getCategorys()
   this.getShops()
   this.getUserInfo()
  
  // this.recordUser()
  }
  ,
  methods:{
    ...mapActions(['getAddress','getCategorys','getShops','recordUser','getUserInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app 
  width 100%
  height 100%
  background #f5f5f5

</style>
