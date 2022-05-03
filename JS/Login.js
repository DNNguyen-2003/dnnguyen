var x=false;
function hienthi(){
    if(x){
        document.getElementById("text").setAttribute("type","password");
        document.getElementById("eye").style.color="#7a797e";
        x=false;
    }
    else{
        document.getElementById("text").setAttribute("type","text");
        document.getElementById("eye").style.color="black";
        x=true;
    }
}