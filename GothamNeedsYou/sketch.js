const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2;

var engine, world;
var drops = [];
var rando,boond;
var back;

var maxxy=100;

var thunders=0;

function preload(){
    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");
    boond = loadImage("drop.png");
    got = loadImage("gotham.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);
    umbrella.scale = 0.1;

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxxy; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(got); 

    //creating thunder
    rando = Math.round(random(1,4));
    if(frameCount%80===0){
        thunders=frameCount;
        thunder = createSprite(random(10,370), random(10,400), 10, 10);
        switch(rando){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            default: break;
        }
        thunder.scale = random(0.8,1)
    }

    if(thunders + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxxy; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }

    drawSprites();
}   
