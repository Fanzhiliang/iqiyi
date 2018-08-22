import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
    state:{
    	user:{},
        keyword:'',
        hotSearch:[],
        historyData:{}
    },
    mutations:{
    	getUserData: function(state,that){
	      	that.$http.get('../../static/data/user.json').then((response)=>{
		        if(response.data.code === 200){
		          state.user = response.data.data.user;
		        }else{
		          console.log('获得用户信息失败:');console.log(response.data.data.message)
		        }
	      	},(response)=>{console.log('获得用户信息失败:');console.log(response);});
	    },
	    removeUserData: function(state){
	    	state.user = undefined;
	    },
    	getHotSearch(state,that){
			that.$http.get('../../static/data/hotSearch.json').then((response)=>{
			    if(response.data.code === 200){
			      	state.hotSearch = response.data.data.list;
			      	state.keyword = state.hotSearch[0];
			    }else{
			      	console.log('获得热门搜索信息失败:');console.log(response.data.data.message)
			    }
			},(response)=>{console.log('获得热门搜索信息失败:');console.log(response);});
    	},
    	getHistoryData: function(state,that){
			that.$http.get('../../static/data/history.json').then((response)=>{
				if(response.data.code === 200){
					state.historyData = response.data.data;
				}else{
					console.log('获得观看历史失败:');console.log(response.data.data.message)
				}
			},(response)=>{console.log('获得观看历史失败:');console.log(response);});
		}
    }
})
