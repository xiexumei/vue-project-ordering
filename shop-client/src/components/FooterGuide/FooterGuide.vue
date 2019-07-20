<template>
	<div>
		<footer class="footer_guide border-1px">
			<a href="#" class="guide_item" @click='goTo("/")'  :class="{'on':'/'==this.$route.path}">
				<span>
					<i class="iconfont icon-U"></i>
				</span>
				<span>外卖</span>
			</a>

			<a href="#" class="guide_item" @click='goTo("/Search")' :class="{'on':'/Search'==this.$route.path}">
				<span>
					<i class="iconfont icon-sousuo"></i>
				</span>
				<span>搜索</span>
			</a>

			<a href="#" class="guide_item" @click='goTo("/Order")' :class="{'on':'/Order'==this.$route.path}" >
				<span>
					<i class="iconfont icon-icon"></i>
				</span>
				<span>订单</span>
			</a>

			<a href="#" class="guide_item" @click='goTo("/Profile")' :class="{'on':'/Profile'==this.$route.path}" >
				<span>
					<i class="iconfont icon-geren"></i>
				</span>
				<span>我的</span>
			</a>

		</footer>
	</div>
</template>
<script type="text/javascript">
	
	export default{
		data(){
			return{

			}
		},

		methods:{
			goTo(path){
				
				this.$router.replace(path)
			}
		}

	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixins.styl"
	
	.footer_guide
	  top-border-1px(#e4e4e4)
	  position fixed;
	  z-index 100
	  left 0
	  right 0
	  bottom 0
	  background-color #fff
	  width 100%
	  height 50px
	  display flex
	
	.guide_item
		  display flex
		  flex 1
		  text-align center
		  flex-direction column
		  align-items center
		  margin 5px
		  color #999
	 &.on
		  color #02a774
	 span
			  font-size 12px
			  margin-top 2px
			  margin-bottom 2px
	 .iconfont
			   font-size 22px






</style>