var num=2;
var conf=452;
function hide(which){
    
    if(which=="req1c"){
        var action=document.querySelector("#req1");
        var confNum=document.querySelector("#confirmed");
        conf++;
        confNum.innerText=conf;
    }

    if(which=="req1"){var action=document.querySelector("#req1");}
    
    if(which=="req2c"){
        var action=document.querySelector("#req2");
        var confNum=document.querySelector("#confirmed");
        conf++;
        confNum.innerText=conf;
    }
    if(which=="req2"){var action=document.querySelector("#req2");}
    
    action.remove();

    var rn = document.querySelector("#requestNumber");
    console.log(rn)
    num--
    rn.innerText=num;
    
}


function nameChange(){
    var newName=document.querySelector("#userName");
    newName.innerText="A.N. Other";
}