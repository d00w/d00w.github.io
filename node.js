window.onload=function(){
	var cv=document.getElementById("cv");
	cv.width=window.innerWidth;
	cv.height=window.innerHeight;
	var ctx=cv.getContext("2d");
	var grd=ctx.createLinearGradient(0, 0, cv.width, cv.height);
	grd.addColorStop(0, "#ff0000");
	grd.addColorStop(0.33, "#ffff00");
	grd.addColorStop(0.6, "#00ff00");
	grd.addColorStop(1, "#0000ff");
	ctx.beginPath();
	ctx.fillStyle=grd;
	ctx.rect(0, 0, cv.width, cv.height);
	ctx.fill();
}
