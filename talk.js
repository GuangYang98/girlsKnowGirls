var list=document.getElementById("list"),
    oImg=document.getElementById("oImg"),
    inps=document.getElementById("inps"),
    btn=document.getElementById("btn"),
    imag=document.getElementById("imag"),
    box=document.getElementById("box");

var onOff=false;



oImg.onclick=function() {
    if(onOff){
        oImg.src="img/1.png";
        onOff=false;
    }
    else{
        oImg.src="img/2.png";
        onOff=true;
    }

}

btn.onclick=function(){
    if(onOff){
        // list.innerHTML+="<li class='zuo'><div>"+imag.innerHTML+"</div><div class='box4'>"+inps.value+"</div><br></li>"; //聊天记录从上往下
        list.innerHTML="<li class='zuo'><div>"+imag.innerHTML+"</div><div class='box4'>"+inps.value+"</div><br></li>"+list.innerHTML;
        inps.value="";
    }
    else{
        // list.innerHTML+="<li class='you'><div>"+imag.innerHTML+"</div><div class='box5'>"+inps.value+"</div><br></li>";
        list.innerHTML="<li class='you'><div>"+imag.innerHTML+"</div><div class='box5'>"+inps.value+"</div><br></li>"+list.innerHTML; //聊天记录从下往上
        inps.value="";
    }
}