var position=0;
const ball=document.getElementById("ball");
  function moveball(){
    ball.style.top=position+"px";
    ball.style.left=position+"px";
    position++;

  }
setInterval(moveball,100);