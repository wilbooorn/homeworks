document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById('myCanvas');
  canvas.width = 500;
  canvas.height = 500;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 100, 100);

  ctx.beginPath();
  ctx.arc(275, 275, 50, 0, 2 * Math.PI);
  ctx.lineWidth = 21;
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.fill();

  var canvas2 = document.getElementById('canvas');
  if (canvas2.getContext) {
     var ctx2 = canvas2.getContext('2d');

    ctx2.beginPath();
    ctx2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx2.moveTo(110, 75);
    ctx2.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx2.moveTo(65, 65);
    ctx2.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx2.moveTo(95, 65);
    ctx2.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx2.stroke();
  }
});
