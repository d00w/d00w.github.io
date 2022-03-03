window.onload = () =>{
	var btn=document.getElementById("btn"), t;
	btn.touchstart=function(){
		t=setInterval(loop);
	}
	btn.ontouchend=function(){
		clearInterval(t);
	}
	function loop(){
		btn.innerHTML=btn.innerHTML+1;
	}
}
