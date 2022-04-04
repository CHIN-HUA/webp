var CODE = "QWERTYUIOPASDFGHJKLZXCVBNM";
var codeArray = [];
var number = 0; 

//建立隨機字母 
function createCode(){
	//0-25
	var index = parseInt(Math.random()*26);
	return CODE.charAt(index);
};

//建立顯示label方法
function createLabel(code){
	/**
	 * <label class="label">
			A
		</label>
	 */
	var label = document.createElement("label");
	label.className = "label";
	label.style.top = "50px";
	label.innerHTML = code;
	label.code = code;
	
	var html = document.documentElement;
	
	//所有label標籤的x座標
	var labelX = parseInt(Math.random()*html.clientWidth);
	if(labelX>100){
		labelX-=20;
	}
	
	label.style.left = labelX+"px";
	
	return label;
}

window.onload = function(){
	document.getElementById("startBtn").disabled = false;
	
	
	//註冊鍵盤事件
	document.documentElement.onkeydown=function(event){
		var keyCode = event.keyCode; //獲取按下的嗎
		var code = String.fromCharCode(keyCode);//A-Z
		for ( var i = 0; i < codeArray.length; i++) {
			//label標籤
			var label = codeArray[i];
			if(label.code==code){
					clearInterval(label.interval_id);
					label.parentNode.removeChild(label);
					codeArray.splice(i,1);
					number+=10;
					
					document.getElementById("msg").innerHTML = number+"分";
				break;
			}
		}
	};
};

//讓label標籤慢慢的從上向下移動
function runLabelTop(label){
	
	//獲取頁面的高度
	var height = Math.max(document.documentElement.clientHeight,document.documentElement.scrollHeight);
	
	label.interval_id = setInterval(function(){
		//50px
		var top = parseInt(label.style.top);
		top+=1;
		//判斷label是否已經超過頁面的高度
		if(top>height-30){
			removeLabel(label,false);
		}else{
			label.style.top = top+"px";
		}
	},10);
}

//flag = false使用者沒有按下該字母
function removeLabel(label,flag){
	clearInterval(label.interval_id);
	label.parentNode.removeChild(label);
	codeArray.shift();
	number-=20;
	document.getElementById("msg").innerHTML = number+"分";
}

var game_id = null;

//開始遊戲
function startGame(startButton){
	
	startButton.disabled = true;
	
	game_id = setInterval(function(){
		//建立要顯示的字元
		var code =createCode();
		//建立一個label顯示字元
		var label = createLabel(code);
		
		//讓label標籤慢慢向下移動,修改標籤的style.top屬性
		runLabelTop(label);
		
		//把label標籤節加入到頁面中
		document.body.appendChild(label);
		codeArray.push(label);
	},1000);
}

//停止遊戲
function stopGame(){
	clearInterval(game_id);
	for ( var i = 0; i < codeArray.length; i++) {
		clearInterval(codeArray[i].interval_id);
		codeArray[i].parentNode.removeChild(codeArray[i]);
	}
	codeArray = [];
	document.getElementById("startBtn").disabled = false;
}