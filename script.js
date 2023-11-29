
    var a=0
    var b=0
    var c=0
    var e=new Date()

 setInterval( function(){
    e=new Date();
    a=e.getSeconds() * 6
   b=e.getMinutes() * 6
   c=e.getHours() * 30 + Math.round(b/12)
   document.getElementById("secondhand").style.transform="rotate("+a+"deg)"
   document.getElementById("minutehand").style.transform="rotate("+b+"deg)"
   document.getElementById("hourhand").style.transform="rotate("+c+"deg)"
  

 },1000

 )
 

