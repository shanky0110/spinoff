var c = document.getElementById('canv'),
    $ = c.getContext('2d');
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

function circle(x, y, r) {
    $.beginPath();
    $.arc(x, y, r, 0, Math.PI * 2);
    $.closePath();
}
var offset = 0;

function draw() {
    $.clearRect(0, 0, w, h);
    $.fillStyle = 'hsla(0,0%,5%,1)';
    $.fillRect(0,0,w,h);
    $.shadowColor = 'hsla(0,0%,0%,.5)';
    $.shadowBlur = 5;
    $.shadowOffsetX = 5;
    $.shadowOffsetY = 5;
    for(var i = 0; i < 20; i++) {
        circle(w/2, h/2, i * 20) + 2;
        $.lineWidth = i*4;
        $.setLineDash([500, 40]);
        $.lineDashOffset = offset * i * 5;
        $.strokeStyle = 'hsla(' + i + 55 + ',90%, 50%, 1)';
        $.stroke();
    }
    offset += 0.13;
    if(offset > 80) offset=0;
}

window.addEventListener('resize',function(){
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
}, false);

window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

run();
function run(){
  window.requestAnimFrame(run);
  draw();
}