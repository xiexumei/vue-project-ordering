/*
vuex的actions.js模块
*/
import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS,
	RECEIVE_USER_INFO,
	RESET_USER_INFO,
	RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    RECEIVE_ADD_COUNT,
    RECEIVE_DECRESS_COUNT,
    CLEARN_CART,
    RECEIVE_SEARCH_SHOP


} from './mutation-types'

//三个接口函数
import {
	reqAddress,
	reqFoodCategorys,
	reqShops,
	reqUserInfo,
	reqLogout,
	reqShopInfo,
	reqShopGoods,
	reqShopRatings,
	reqSearchShop

} from '../api'

export default{
	//异步获取地址
	async getAddress ({commit, state}){
		//1.发送异步ajax请求,调用上面那个方法,现在的数据是在state里面

		const geohash = state.latitude + ','+state.longitude
		const result = await reqAddress(geohash)
		//2.提交一个mutation
		if(result.code == 0){
			const address = result.data
			commit(RECEIVE_ADDRESS,{address: result.data})
		}
	},
	
	//获取商品分类列表
	async getCategorys ({commit, state}){
		//1.发送异步ajax请求,调用上面那个方法,现在的数据是在state里面

		
		const result = await reqFoodCategorys()
		//2.提交一个mutation
		if(result.code == 0){
			const categorys = result.data
			commit(RECEIVE_CATEGORYS,{categorys: result.data})
		}
	},
	
	//获取商家列表
	async getShops ({commit, state}){
		//1.发送异步ajax请求,调用上面那个方法,现在的数据是在state里面

		const {longitude, latitude} = state
		const result = await reqShops(longitude, latitude)
		//2.提交一个mutation
		if(result.code == 0){
			const shops = result.data
			commit(RECEIVE_SHOPS,{shops:result.data})
		}
	},

	//同步记录用户信息
	recordUser ({commit},userInfo){
		commit(RECEIVE_USER_INFO,{userInfo})
		
	},

	//异步获取用户信息，让应用一开始就调用这个方法
	//获取商家列表
	async getUserInfo ({commit, state}){
		//1.发送异步ajax请求,调用上面那个方法,现在的数据是在state里面
		const result = await reqUserInfo()
		//2.提交一个mutation
		if(result.code == 0){
			const userInfo = result.data
			commit(RECEIVE_USER_INFO,{userInfo:result.data})
		}
	},

	async logout({commit, state}){
		const result = await reqLogout()
		if(result.code == 0){
			commit(RESET_USER_INFO)//这个时候重置user信息
		}

	},
	
	 // 异步获取商家信息
  async getShopInfo({commit,state}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  //同步更新count,因为不需要去后台后去数据,接收到前面获取的参数isAdd,food
  updateFoodCount({commit},{isAdd, food}){

  	//然后判断isAdd=true 加， isAdd=false 减
  	if(isAdd){
  		//true就commit mutation中的
  		commit(RECEIVE_ADD_COUNT,{food})
  	}else{
  		commit(RECEIVE_DECRESS_COUNT,{food})
  	}

  }
  ,
  //同步清空购物车
  ClearCart({commit}){
  	commit(CLEARN_CART)
  },
  //异步搜索
  async getSearchShop({commit,state},{keyword}){
  	const {latitude, longitude}=state

  	const result = await reqSearchShop(latitude+','+longitude,keyword)
  	if(result.code===0){
  		const searchShops = result.data
  		commit(RECEIVE_SEARCH_SHOP,{searchShops:result.data})
  	}


  }
	
}