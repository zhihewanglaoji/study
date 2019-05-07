new Vue({
	el:"#vue-app",
	data :{
		name : "name is a xp",
		age :5,
		x :0,
		y :0,
		job : "后台开发工程师",
		website : "https://www.baidu.com",
		websiteTag : "<a href='https://www.sina.com.cn'>百度</a>",
	},
	methods:{
		greet : function(msg){
			return 'Good Morning'+msg+'>>'+this.name+'!';
		},
		add :function(){

			
			
				this.age++;
			
		},
		plus :function(){
			
			if(this.age > 0){
				this.age--;	
			}
		},
		updateXY :function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		}

	}
});