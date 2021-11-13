window.onload = function(){
  sbar.addEventListener("click", contswtch);
  document.getElementsByTagName("link")[0].addEventListener("click", hc);
  document.getElementsByTagName("link")[1].addEventListener("click", dc);
  document.getElementsByTagName("link")[2].addEventListener("click", ac);
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

function clr(){
	for(var x=0; x<contbox.length; x++){
	contbox[x].style.display="none"
	}
}




function hc(){
	alert("poopoo");
	clr();
	contbox[0].style.display = "block";
}




function dc(){
	clr();
	contbox[1].style.display = "block";
}





function ac(){
	clr();
	contbox[2].style.display = "block";
}
