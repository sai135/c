 var x=0;
var y=0;
var screen_width=0;
var screen_height=0;
var apple="";
var to_number
draw_circle="";
draw_rect="";
var SpeechRecognition = window.webkitSpeechrecongnition;
var recognition=new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content=event.results[0][0].transcipt;
    document.getElementById("status").innerHTML="The speech has been recongised as"+content;
    to_number=Number(content);
    speak_data=document.getElementById("status").innerHTML=to_number+"Apples drawn";
    utter_this=new SpeechSynthesisUtterance(speak_data);
    synth.utter_this(speak_data);
    
    if(Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML="Started drawing apple";
    draw_apple="set"
    }else {
        document.getElementById("status").innerHTML="The speech has been not recognized the number";
    }
 
    if(content==cirice){
    x=Math.floor(Math.random*900);
    y=Math.floor(Math.random*600);
    document.getElementById("status").innerHTML="Started drawing circle";
    draw_circle="set";
    }

    if(content==rectangle){
        x=Math.floor(Math.random*900);
        y=Math.floor(Math.random*600);
        document.getElementById("status").innerHTML="Started drawing ectangle";
        draw_rect="set";
        }
}

function preload() {
    apple=loadImage("https://images.app.goo.gl/QChYYbBDe3VC6fkeA");
}

function setup() {
    canvas=createCanvas(900,600);
    canvas.center();
}

function draw() {
    if(draw_rect="set") {
        radius=Math.floor(Math.random*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        draw_circle="";
        for(var i = 1; i <= to_number; i++){
            x=Math.floor(Math.random*700);
            y=Math.floor(Math.random*400);
            image(apple, x, y, 150, 150);
        }
        
    }

    if(draw_rect="set"){ 
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        draw_rect="";
    }
    }