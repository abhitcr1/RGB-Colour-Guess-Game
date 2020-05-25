var ns=6;
var colors = grc(ns);
var squares = document.querySelectorAll(".square");
var pc=pcolor();
var cd=document.getElementById("cd");
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var rb=document.querySelector("#rbut");
var ebtn=document.querySelector("#ebtn");
var hbtn=document.querySelector("#hbtn");

ebtn.addEventListener("click",function(){
    hbtn.classList.remove("selected");
    ebtn.classList.add("selected");
    ns=3;
    colors=grc(ns);
    pc=pcolor();
    cd.textContent=pc;
    for(var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.background="none";
        }
    }
});

hbtn.addEventListener("click",function(){
    ebtn.classList.remove("selected");
    hbtn.classList.add("selected");
    ns=6;
    colors=grc(ns);
    pc=pcolor();
    cd.textContent=pc;
    for(var i=0; i<squares.length;i++){
       
            squares[i].style.background=colors[i];
        
       
            squares[i].style.background="block";
        
    }
});


rb.addEventListener("click",function(){
    colors=grc(ns);
    pc=pcolor();
    cd.textContent=pc;
    this.textContent="New Colours";
    msg.textContent="";
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
    h1.style.background="steelblue"
    

});


cd.textContent=pc;





for(var i=0; i < squares.length; i++){

    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
var cc=this.style.backgroundColor;
if(cc===pc)
{
    msg.textContent="Yay!!!,Correct ";
    changec(cc);
    h1.style.background=cc;
    rb.textContent="Play Again??"
    

}
else
{
    this.style.background="#232323"
    msg.textContent="wrong!,try again:) ";
}
    });
}
function changec(color){
    for(var i=0;i<colors.length;i++){
        squares[i].style.background=color;
    }
}

function pcolor(){
   var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}
function grc(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(rc())
    }
    return arr;
}

function rc(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g+", "+b+")";
}