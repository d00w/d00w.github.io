window.onload = () =>{
	var btn=document.getElementById("btn"), t=0;
	setInterval(loop, 100);
	btn.ontouchstart=function(){
		t=1;
	}
	btn.ontouchEnd=function(){
		t=0;
	}
	function loop(){
	if(t>0)
	 btn.innerHTML=btn.innerHTML+1;
	}
}
