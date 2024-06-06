var partner=document.querySelector("div");

var changeBigBtn=document.querySelector(".big");
var changeSmallBtn=document.querySelector(".small");
 
function changeFontSizeBig(){

    partner.classList.add("bigsize");

}


function changeFontSizeSmall(){
partner.classList.remove("bigsize");

}


changeBigBtn.onclick = changeFontSizeBig;

changeSmallBtn.onclick = changeFontSizeSmall;
