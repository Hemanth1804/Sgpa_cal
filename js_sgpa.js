function calculate(){
    let num1=parseInt(document.getElementById("maths").value);
    let num2=parseInt(document.getElementById("phy").value);
    let num3=parseInt(document.getElementById("pop").value);
    let num4=parseInt(document.getElementById("eng").value);
    let num5=parseInt(document.getElementById("kann").value);
    let num6=parseInt(document.getElementById("idt").value);
    let num7=parseInt(document.getElementById("mech").value);
    let num8=parseInt(document.getElementById("iot").value);
    if(num1>100 && num2>100 && num3>100 && num4>100 && num5>100 && num6>100 && num7>100 && num8>100){
        alert("You entred ivalid marks")
    }
    else{
        if(num1==100){
            num1=parseInt((num1/10));
        }else{
    num1=parseInt((num1/10))+1;
        }
        if(num2==100){
            num2=parseInt((num2/10));
        }
        else{
    num2=parseInt((num2/10))+1;
        }
        if(num3==100){
            num3=parseInt((num3/10));
        }else{
   num3=parseInt((num3/10))+1;
        }
        if(num4==100){
            num4=parseInt((num4/10));
        }else{
   num4=parseInt((num4/10))+1;
        }
        if(num5==100){
   num5=parseInt((num5/10));
        }else{
   num5=parseInt((num5/10))+1;
        }
        if(num6==100){
            num6=parseInt((num6/10));
    }else{
   num6=parseInt((num6/10))+1;
    }
    if(num7==100){
        num7=parseInt((num7/10));
}else{
   num7=parseInt((num7/10))+1;
}
if(num8==100){
    num8=parseInt((num8/10));
}
else{
   num8=parseInt((num8/10))+1;
}
   let grade=(num1*4)+(num2*4)+(num3*3)+(num4)+(num5)+(num6)+(num7*3)+(num8*3);
    let calculate=grade/20;

if(calculate>=9){
    document.getElementById("result").value="Congargulation you got "+calculate+"🥳 🥳 🥳 SGPA";
}
else if(calculate>=8)
document.getElementById("result").value="Congargulation you got "+calculate+"😃 😃 SGPA";
else if(calculate>=7||calculate>=6||calculate>=5||calculate>=4||calculate>=3||calculate>=2||calculate>=1||calculate==0){
    document.getElementById("result").value="Congargulation you got "+calculate+"😃 SGPA";
}
else{
    document.getElementById("result").value="enter your marks properly";
}
    }
    
}