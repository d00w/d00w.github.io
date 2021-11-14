window.onload = function(){
  var link = document.getElementsByClassName("link");
  sbar.addEventListener("click", contswtch);
  setTimeout(clr, 1000);
  alert("not worked");
  link[0].addEventListener("click", hc);
  link[1].addEventListener("click", dc);
  link[2].addEventListener("click", ac);
}
function contswtch(){
	if(links.style.width == "100px"){
	links.style.width = "0px";
	sbar.style.left="0px";
	sbar.style.top="0px";
	sbar.style.transform="rotate(0deg)";
	}
	else{
	links.style.width = "100px";
	sbar.style.left="111px";
	sbar.style.top="11px";
	sbar.style.transform="rotate(90deg)";
	}
}
var contbox = document.getElementsByClassName("contbox");
function clr(){
	var x=0;
	for(x=0; x<3; x++){
	contbox[x].style.display = "none";
	//alert(x);
	}
}



function hc(){
	contswtch();
	clr();
	contbox[0].style.display = "block";
}




function dc(){
	contswtch();
	clr();
	contbox[1].style.display = "block";
}





function ac(){
	contswtch();
	clr();
	contbox[2].style.display = "block";
}
