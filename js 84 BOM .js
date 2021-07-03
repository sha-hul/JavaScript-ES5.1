// height and width of browser
function resize(){
    console.clear();
   var a= window.innerWidth;
   var b= window.outerWidth;
   var c= window.innerHeight;
   var d= window.outerHeight;
  console.log("innerwidth :"+a +"outerWidth :"+b+"innerHeight :"+c+"outerHeight :"+d)
}
// open and close
var myWindow;
function openWindow(){
myWindow=window.open("","","width=300px,height=200px");
}
function closeWindow(){
    myWindow.close();
}
// moveBy  is add pixel to the actual width
function moveWindow(){
    myWindow.moveTo(200,200);
    // myWindow.moveBy(200,200)
}
// resizeBy is add pixel to the actual width
function resizeWindow(){
    myWindow.resizeTo(400,300);
    // myWindow.resizeBy(400,300);
}
function backTab(){
    myWindow.back();
}
function forwardTab(){
    myWindow.forward();
}
function goTab(){
    myWindow.go(-1);
}