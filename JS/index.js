
var x=1;
setInterval(function(){
    document.getElementById('radio'+x).checked = true;
    x++;
    if(x>4){
        x=1;
    }
},4000);