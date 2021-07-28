function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    //video.size(500,500);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded)
}

function draw() {
image(video,0,0,300,300);
//circle(noseX,noseY,20);
//fill(255,0,0);
//stroke(255,0,0);
classifier.classify(video,gotResult);
}



function modelLoaded() {
    console.log("modelLoaded")
}

function gotResult(error,results) {
 if(error){
     console.error(error);
    
 }
 else{
     console.log(results);
     document.getElementById("obj_name").innerHTML=results[0].label;
     document.getElementById("obj_acc").innerHTML=results[0].confidence.toFixed(3);
     
 }
}