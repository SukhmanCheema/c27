class Chain{

constructor(body1,body2){

var options={
bodyA:body1,
bodyB:body2,
length:50,
stiffness:1,
};
this.chain=Matter.Constraint.create(options);
World.add(world,this.chain);





}
display(){
strokeWeight(7);
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);






}













}