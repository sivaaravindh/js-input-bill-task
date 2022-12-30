function Time(){
let price=parseInt(document.getElementById("price").value); 
let tip=document.getElementById("tips").value;
let a=parseInt(tip/100*price);
document.getElementById("rupee").value=a;

var tol=price+a;
document.getElementById("total").value=tol;
document.getElementById("con").innerText="your bill amount is " +tol;
}


