function Sakura(){
  this.trunk = new Branch();
  this.tick = function(){
    window.requestAnimationFrame(tick);
    this.trunk.tick();
  }
};

function Branch(length, thickness, angle, children){
  this.length = length;
  this.thickness = thickness;
  this.angle = angle;
  this.chilren = children;
  this.tick = function(){

  }
}