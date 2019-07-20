import Vue from 'vue'
//import moment from 'moment'
//import {format} from 'date-fns'
Vue.filter('date-format', function(value,formatStar){
	return format(value,'YYYY-MM-DD HH:mm:ss')
})