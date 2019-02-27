new Vue({
	el:"#app",
	data:{
		wanjia:100,
		guaiwu:100,
		gameisRanning:false,
		tures:[]
	},
	methods:{
		//开始游戏
		startGame:function(){
			this.wanjia=100;
			this.guaiwu=100;
			this.gameisRanning=true;
			this.tures=[];
			
		},
	//攻击
		attack:function(){
			//玩家伤害值
			var ak =this.shanhai(3,10);
			var akt=this.shanhai(5,15);
			this.guaiwu-=ak;
			this.wanjia-=akt;
			this.tures.unshift({
				isplayer:true,
				tts:"玩家对怪物造成了"+ak,
				tgw:"怪物对玩家造成了"+akt,
			})
			console.log(this.tures)
			this.win();
		},
		//特殊攻击
		specialAttack:function(){
			
		},
		//治愈
		heal:function(){
			
		},
		//放弃
		giveUp:function(){
			
		},
		//伤害值
		shanhai:function(min,max){
			 return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		win:function(){
			if(this.guaiwu<=0){
				alert("你赢了")
			}else if(this.wanjia<=0){
				alert("你输了")
			}
		}
		
		
	}
})