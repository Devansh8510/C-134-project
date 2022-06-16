img="";
                objects=[];
                status="";
                sound1="";
                 function preload() {
                     img=loadImage("baby.jpg");
                     sound=loadSound("alaram_digital.mp3");
                 }

                 function setup() {
                     canvas=createCanvas(650,400);
                     canvas.center();
                     loadM=ml5.objectDetector("cocossd",modeloaded);
                     document.getElementById("Status").innerHTML="Status-Detecting object";
                     
                 }

                 function modeloaded() {
                     console.log("your model has been loaded");
                     status=true;
                loadM.detect(img,gotresults)
                 }

                 function draw() {
                     if(status!=""){
                        image(img,0,0,650,400);
                        for (let counter = 0; counter < objects.length; counter++) {
                        fill("blue");
                        document.getElementById("Status").innerHTML="Status-Object Detected"
                         percentage=floor( objects[counter].confidence*100);
                         noFill();
                         stroke("red");
                         object_name=objects[counter].label;
                         //text("text to been shown",x,y)
                         text(objects[counter].label+" "+percentage+"%",objects[counter].x+10,objects[counter].y+15);
                         rect(objects[counter].x,objects[counter].y,objects[counter].width,objects[counter].height);
                         if (object_name=="person") {
                             sound.stop();
                         } else {
                             sound.play();
                         }
                        }

                     }
                    

                 }
                 
                 function gotresults(error,results) {
                     if(error){
                         console.log(error);
                     }
                 console.log(results);
                 objects=results
                 }