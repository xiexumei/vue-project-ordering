<template>
	<section class="profile">
		<header class="header">
			<HeaderTop title='我的列表'></HeaderTop>		
		</header>
		<section class="profile-number">
			<router-link :to="userInfo._id? '/userInfo':'/login'" class="profile-link">
				<div class="profile_image">
					<i class="iconfont icon-geren1"></i>
				</div>
				<div class="user-info">
					<p class="user-info-top">{{userInfo._id|| '注册|登录'}}</p>
					<p>
						<span class="user-icon">
							<i class="iconfont icon-shouji icon-mobile"></i>
						</span>
						<span class="icon-mobile-number">暂时无绑定手机号</span>
					</p>
				</div>
				<span class="arrow">
					<i class="iconfont icon-arrow"></i>
				</span>
			</router-link>			
		</section>

		<section class="profile_info_data border-1px">
			<ul class="info_data_list">
				<a href="#" class="info_data_link">
					<span class="info_data_top"><span>0.00</span>元</span>
					<span class="info_data_bottom">我的余额</span>
				</a>
				<a href="#" class="info_data_link">
					<span class="info_data_top"><span>0.00</span>元</span>
					<span class="info_data_bottom">我的余额</span>
				</a>
				<a href="#" class="info_data_link">
					<span class="info_data_top"><span>0.00</span>元</span>
					<span class="info_data_bottom">我的余额</span>
				</a>
			</ul>
		
		</section>
		<section class="profile_my_order border-1px">
		  <a href="#" class="my_order">
		  	<span>
		  		<i class="iconfont icon-dingdan"></i>
		  	</span>
		  	<div class="my_order_div">
		  			<span>我的订单</span>
		        	<span class="my_order_icon">
		  		      <i class="iconfont icon-arrow"></i>
		  	        </span>
		  	</div>	  
		  </a>	
		   <a href="#" class="my_order">
		  	<span>
		  		<i class="iconfont icon-dingdan"></i>
		  	</span>
		  	<div class="my_order_div">
		  			<span>积分商城</span>
		        	<span class="my_order_icon">
		  		      <i class="iconfont icon-arrow"></i>
		  	        </span>
		  	</div>	  
		  </a>	
		   <a href="#" class="my_order">
		  	<span>
		  		<i class="iconfont icon-huiyuanquanyi"></i>
		  	</span>
		  	<div class="my_order_div">
		  			<span>会员卡</span>
		        	<span class="my_order_icon">
		  		      <i class="iconfont icon-arrow"></i>
		  	        </span>
		  	</div>	  
		  </a>	
	   </section>
	   <section class="profile_my_order border-1px">
	   	   <a href="#" class="my_order">
		  	<span>
		  		<i class="iconfont icon-huiyuanquanyi"></i>
		  	</span>
		  	<div class="my_order_div">
		  			<span>会员卡</span>
		        	<span class="my_order_icon">
		  		      <i class="iconfont icon-arrow"></i>
		  	        </span>
		  	</div>	  
		  </a>	
	   </section>

	   <section class="profile_my_order border-1px">
	   	   <mt-button type="danger" style="width: 100%" @click="logout" v-if="userInfo._id">退出登录</mt-button>
	   </section>
	</section>
</template>
<script type="text/javascript">
	import {mapState} from 'vuex'
    import { MessageBox } from 'mint-ui'
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'	
	export default{
       components:{
       	HeaderTop
       },

       computed:{
       	...mapState(['userInfo'])
       },
       methods:{
       	logout(){

       		MessageBox.confirm('确定退出登录吗?').then(
       			action => {
       				//确定，确定要请求数据
       				this.$store.dispatch('logout')

				},
				action => {
					//取消
					console.log("取消退出")

			});

       	}
       }
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	        .header
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
	             color #fff
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
	      &.profile
	        width 100%
	        .profile-number
	          margin-top 30.5px
	          .profile-link
	            clearFix()
	            position relative
	            display block
	            background #02a774
	            padding 20px 10px
	            .profile_image
	              float left
	              width 60px
	              height 60px
	              border-radius 50%
	              overflow hidden
	              vertical-align top
	              .icon-geren1
	                background #e4e4e4
	                font-size 62px
	            .user-info
	              margin-top 8px
	              margin-left 80px
	              p
	              font-weight 700
	              font-size 18px
	              color #fff
	              &.user-info-top
	                padding-bottom 8px
	              &.user-icon
	                display inline-block
	                margin-left -15px
	                margin-right 5px
	                width 20px
	                height 20px
	                .icon-mobile
	                  font-size 30px
	                  vertical-align text-top
	              .icon-mobile-number
	                 font-size 14px
	                 color #fff
	            .arrow
	              width 12px
	              height 12px
	              position absolute
	              right 15px
	              top 40%
	              .icon-arrow
	                font-size 5px
	                color #fff
	        .profile_info_data
	          bottom-border-1px(#e4e4e4)
	          width 100%
	          background #fff
	          overflow hidden
	          .info_data_list
	            clearFix()
	            .info_data_link
	              float left
	              width 33%
	              text-align center
	              border-right 1px solid #f1f1f1
	              .info_data_top
	                display block
	                width 100%
	                font-size 14px
	                color #333
	                padding 15px 5px 10px
	                span 
	                  display inline-block
	                  font-size 30px
	                  color #f90
	                  font-weight 700
	                  line-height 30px
	              .info_data_bottom
	                display inline-block
	                font-size 14px
	                color #666
	                font-weight 400
	                padding-bottom 10px
	        .profile_my_order
	          top-border-1px(#e4e4e4)
	          margin-top 10px
	          background #fff
	          .my_order
	            display flex
	            align-items center
	            padding-left 15px
	            >span
	              display flex
	              align-items center
	              width 20px
	              height 20px
	              >.iconfont
	                margin-left -10px
	                font-size 30px
	              .icon-dingdan
	                color #02a774
	            .my_order_div
	              width 100%
	              border-bottom 1px solid #f1f1f1
	              padding 18px 10px 18px 0
	              font-size 16px
	              color #333
	              display flex
	              justify-content space-between
	              span
	                display block
	              .my_order_icon
	                width 10px
	                height 10px
	                .icon-arrow
	                  color #bbb
	                  font-size 10px



	            


	          







	    

	               
	              
	   


</style>