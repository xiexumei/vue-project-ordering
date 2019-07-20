<template>
	<div class="cartcontrol">
    <transition name="move">
		  <div class="iconfont iconremove_circle_outline" v-if="food.count" @click="updateFoodCount(false)"></div>
    </transition>
		<div class="cart-count">{{food.count}}</div>
		<div class="iconfont iconadd_circle" @click="updateFoodCount(true)"></div>
    </div>
</template>
<script type="text/javascript">
	export default{
		props: { //接收传入的food
        food: {
            type: Object
        }
    },
    methods:{
      updateFoodCount(isAdd){
        //如果为true就加
        //如果为false就减
        //但是这里加减不能直接在组件里面写，将这些操作交给vuex处理
        //food.count++
        //要传递参数：需要让后台识别是加还是减：isAdd, 需要让后台知道是哪一个food发生变化，所以需要传过去这两个
        this.$store.dispatch("updateFoodCount",{isAdd,food: this.food})
      }
    }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .iconremove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .iconadd_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
