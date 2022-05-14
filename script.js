window.onload =()=>{
    var btn = document.getElementById("btn"), nav = document.getElementById("nav");
    btn.onclick = function(){
        if(btn.style.left=="0px"){
           btn.style.left="200px";
           btn.style.transform="rotate(90deg)";
           nav.style.width="200px";
        }
        else{
            btn.style.left="0px";
            btn.style.transform="rotate(0deg)";
            nav.style.width=0;
        }
    }
}
