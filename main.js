function setup()
{
    canvas=createCanvas(550,550);
    canvas.position(550,150);

    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function modelloaded()
{
    console.log("posenet is initialized");
}
function draw()
{
    background("#24efc0");
    textSize(10);
    fill("#f233ec");
   text('Divyanshu',50,400);
    
}
function gotposes(error,results)
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);

    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;

    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);
  }
}
