// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("小姐姐在考虑一下呗");
	   }else if(Dianji==2){
		   		alert("你是我见过的最可爱的女孩纸");
		   		
	   }else if(Dianji==3){
		   		alert("会写代码");
		   		
	   }else if(Dianji==4){
		   		alert("会修电脑");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("工资全上交");
		   		alert("");
	  }else if(Dianji==7){
		   		alert("保大");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("小饺子终于同意了，我爱你");
	}
	

}