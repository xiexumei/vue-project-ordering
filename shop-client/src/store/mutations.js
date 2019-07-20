/*
vuex的mutations.js模块
*/
import Vue from 'vue'
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
export default{
	//这个是方法名,action 和mutation交互的时候传的是包含这个数据的对象
      [RECEIVE_ADDRESS] (state, {address}){
      	state.address = address
      },

      [RECEIVE_CATEGORYS] (state, {categorys}){
      	state.categorys = categorys
      },
      
      [RECEIVE_SHOPS] (state, {shops}){
      	state.shops = shops
      },

      [RECEIVE_USER_INFO] (state, {userInfo}){
            state.userInfo = userInfo
      },
      [RESET_USER_INFO] (state){
            state.userInfo = {}
      },

      [RECEIVE_GOODS] (state,{goods}){
            state.goods = goods
      },

      [RECEIVE_RATINGS] (state,{ratings}){
            state.ratings = ratings
      },

      [RECEIVE_INFO] (state,{info}){
            state.info = info
      },

      [RECEIVE_ADD_COUNT](state,{food}){
            //如果没有food.count
            if(!food.count){
                  //视图没有出现
                 // food.count=1
                  Vue.set(food, 'count', 1)
                  //第一次点击加的时候，将这个food存到cartfoods中
                  state.cartFoods.push(food)


            }else{
                  food.count++
            }
      },

      [RECEIVE_DECRESS_COUNT](state,{food}){
            food.count--
            if(food.count<=0){
                  food.count=0;
                  if(food.count==0){
                      state.cartFoods.splice(state.cartFoods.indexOf(food),1);  
                  }
            }

      },
      [CLEARN_CART](state){

            state.cartFoods.forEach((food)=>{
                  food.count=0;

            })
            state.cartFoods=[]
      },
      [RECEIVE_SEARCH_SHOP](state,{searchShops}){
            state.searchShops=searchShops;
      }



}