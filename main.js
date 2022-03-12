leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
scoreleftWrist = 0;
song_song1="";
function preload(){
we_dont_talk_anymore = loadSound("song 1.mp3");
let_me_down_slowly = loadSound("song 2.mp3");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    webcam.size(500,500);
    posenetmodel = ml5.poseNet(webcam , modelloaded)
    posenetmodel.on("pose" , gotPoses)

}
function draw(){
    image(webcam ,0,0,500,500);
    fill("blue");
 stroke("blue");
 song_song1 = we_dont_talk_anymore.isPlaying();
 if(scoreleftWrist > 0.2){
    circle(leftwristX, leftwristY, 20);
    let_me_down_slowly.stop();
    if(song_song1 == false){
        we_dont_talk_anymore.play();
        document.getElementById("songname_result").innerHTML = "Song name: We don't talk anymore";
    }
 }

 
}
function modelloaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist)
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;

    }

}