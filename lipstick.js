noseX = 0;
noseY = 0;


function preload()
{
    lips = loadImage('lipstick.png');
}

function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}


function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}


function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 30 ;
        noseY = results[0].pose.nose.y + 25 ;
        console.log("Nose X : " + results[0].pose.nose.x);
        console.log("Nose Y : " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 450, 400);
    image(lips, noseX, noseY, 70, 55);
}

function back()
{
    window.location = "index.html";
}

function take_snap()
{
    save("Filter.jpg")
}