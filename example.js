
var Engine = Matter.Engine,
    Events = Matter.Events,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();
var world = engine.world;


// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});


// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);//x,y,w,h
var boxB = Bodies.polygon(450, 50, 5,50);//x,y,sides,length
var boxC = Bodies.circle(500, -100, 60);//x,y,r
var boxD = Bodies.trapezoid(200, -100, 40,80,-0.3);//x,y,width,height,slope
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });//静态墙

// add all of the bodies to the world
World.add(world, [boxA, boxB, boxC, boxD, ground]);





// run the renderer
Render.run(render);

// Engine.run(engine);


// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine)

