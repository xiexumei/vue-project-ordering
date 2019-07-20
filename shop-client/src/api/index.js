
import ajax from './ajax'
const BASE_URL = '/api'
//[1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = geohash=>ajax(`/api/position/${geohash}`)
//[2、获取食品分类列表](#2获取食品分类列表)<br/>

export const reqFoodCategorys =()=>ajax(`/api/index_category`)
//[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>

export const reqShops = (latitude, longitude)=>ajax(`/api/shops?latitude=${latitude}&longitude=${longitude}`)

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})

//5.根据用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax('/api'+'/login_pwd', {name, pwd, captcha}, 'POST')

//6.发送短信验证码
export const reqSendCode = (phone)=>ajax('/api/sendcode', {phone})

//7.手机号验证码登录
export const reqSmsLogin = (phone, code)=>ajax('/api/login_sms',{phone ,code}, 
	'POST')

//8.根据会话获取用户信息
export const reqUserInfo = ()=> ajax('/api/userinfo')

//9.用户登出
export const reqLogout = () =>ajax('/api/logout')

//10.获取商家信息
export const reqShopInfo = () =>ajax('/info')

//11.获取点餐信息
export const reqShopGoods = () =>ajax('/goods')

//12.获取评论信息
export const reqShopRatings = () =>ajax('/ratings')