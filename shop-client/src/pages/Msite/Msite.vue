<template>
	<section class="msite">
		<!--头部-->
		<header class="msite_header">
			<HeaderTop :title="address.name">
				<router-link class="header_search" slot='left' to='/Search'>
				   <i class="iconfont icon-sousuo"></i>
			    </router-link>
                <router-link class="header_login" slot='right' :to="userInfo._id? '/userInfo':'/login'">
				   <span class="header_login_text" v-if="!userInfo._id">登录注册</span>
				   <span class="header_login_text" v-else>
				   	  <i class="iconfont icon-geren"></i>
				   </span>
			    </router-link>
			</HeaderTop>
		</header>

		<!--轮播图部分-->
		<nav class="msite_nav bottom-border-1px">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/1.jpg">
							</div>
							<span>甜品饮品</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/2.jpg">
							</div>
							<span>商超便利</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/4.jpg">
							</div>
							<span>美食</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/5.jpg">
							</div>
							<span>新店特惠</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/6.jpg">
							</div>
							<span>准时达</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/7.jpg">
							</div>
							<span>预订早餐</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/8.jpg">
							</div>
							<span>土豪推荐</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/9.jpg">
							</div>
							<span>甜品饮品</span>
						</a>
					</div>
					<div class="swiper-slide">
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/10.jpg">
							</div>
							<span>甜品饮品</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/11.jpg">
							</div>
							<span>商超便利</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/12.jpg">
							</div>
							<span>美食</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/13.jpg">
							</div>
							<span>新店特惠</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/14.jpg">
							</div>
							<span>准时达</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/1.jpg">
							</div>
							<span>预订早餐</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/2.jpg">
							</div>
							<span>土豪推荐</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/nav/3.jpg">
							</div>
							<span>甜品饮品</span>
						</a>	
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</nav>

		<!--首页附近的商家-->
		<ShopList></ShopList>
	</section>
        
</template>
<script type="text/javascript">
	import {mapState} from 'vuex'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import ShopList from '../../components/ShopList/ShopList.vue'
	export default{
       components:{
       	HeaderTop,
       	ShopList
       },
       computed:{
       	...mapState(['address','categorys','userInfo'])

       },
       
       watch:{
         categorys(values){
            this.$nextTick(()=>{//这个一定要写在数据更新之后
                 new Swiper('.swiper-container',{
                 	loop: true,
                 	pagination:{
                 		el:'.swiper-pagination'
                 	}
                 })
       		
         	})
         }
       }

     
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
	    .msite
	      width 100%
	      .msite_header
	        background-color #02a774
	        position fixed
	        z-index 100
	        top 0
	        left 0
	        width 100%
	        height 45px
	        .header_search
	          position absolute
	          left 15px
	          top 30%
	          width 10%
	          height 50%
	          .icon-sousuo
	            font-size 25px
	            color #fff
	        .header_login
	          font-size 14px
	          color #fff
	          position absolute
	          right 15px
	          top 50%
	          transform transformY(-50%)
	          .header_login_text
	            color
	        .header_title
	          position absolute
	          top 50%
	          left 50%
	          transform translateX(-50%)
	          width 50%
	          color #fff
	          text-align center
	          .header_title_text
	            font-size 20px
	            color #fff
	            display block
	      .msite_nav
	        bottom-border-1px(#e4e4e4)
	        margin-top 45px
	        height 200px
	        background-color #fff
	        .swiper-container
	          width 100%
	          height 100%
	          overflow hidden
	          .swiper-wrapper
	            width 100%
	            height 100%
	            .swiper-slide
	              display flex
	              justify-content center
	              align-items flex-start
	              flex-wrap wrap
	              .link_to_food
	                width 25%
	                .food_container
	                  display block
	                  width 100%
	                  text-align center
	                  padding-bottom 10px
	                  img
	                    display inline-block
	                    width 50px
	                    height 50px
	                span
	                  display block
	                  width 100%
	                  text-align center
	                  font-size 13px
	                  color #666
	            .swiper-pagination
	              >span.swiper-pagination-bullet-active
	                background #02a774

	      




















            
              
              
              







</style>