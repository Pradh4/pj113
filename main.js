function setup(){
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    }

    function draw(){
        image(video, 0, 0, 480, 380);

    
    }
   
