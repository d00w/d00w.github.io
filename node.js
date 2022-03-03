window.onload = () =>{
	var btn=document.getElementById("btn"), t=0;
	setInterval(loop, 100);
	btn.ontouchstart=function(){
		t=1;
	}
	btn.ontouchend=function(){
		t=0;
	}
	btn.onmousedown=function(){
		t=1;
	}
	btn.onmouseup=function(){
		t=0;
	}
	function loop(){
	 if(t==1){
	  var x=btn.innerHTML;
	  x++;
	  btn.innerHTML=x;
	 }
	}
}
