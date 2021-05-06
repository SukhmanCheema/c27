class Slingshot{

constructor(body1,pointB){

var options={
bodyA:body1,
pointB:pointB,
length:50,
stiffness:1,
};
this.sling =Matter.Constraint.create(options);
this.pointB=pointB;
World.add(world,this.sling);





}

fly(){
  this.sling.bodyA=null  
}



display(){
if(this.sling.bodyA){

  
strokeWeight(7);
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);

}




}













}