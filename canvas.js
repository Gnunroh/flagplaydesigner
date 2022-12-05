const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const canvasLeft = canvas.offsetLeft + canvas.clientLeft;
const canvasTop = canvas.offsetTop + canvas.clientTop;

console.log(canvasLeft)
console.log(canvasTop)

canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;


//Resizing
canvas.width = window.innerWidth * 0.6;
canvas.height = window.innerHeight * 0.7;
c.lineWidth = 20;

canvas.style.border = '5px solid black';

let canvas_width = canvas.width;
let canvas_height = canvas.height;

class Circle {
    constructor(xpoint, ypoint, radius, color) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
    }

    draw(c) {
        c.beginPath();
        c.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.closePath();
    }
}

let paths = [];
let circles = [];
let currentCircleIndex = null;
let isDragging = false;
let isSelected = false;
let isExisting = false;
let selectedCircle = 0;
let startX;
let startY;

circles.push( {x: canvas_width * 0.15, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
circles.push( {x: canvas_width * 0.45, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
circles.push( {x: canvas_width * 0.45, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
circles.push( {x: canvas_width * 0.60, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
circles.push( {x: canvas_width * 0.75, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});

let path1 = new Path2D();
let path2 = new Path2D();
let path3 = new Path2D();
let path4 = new Path2D();
let path5 = new Path2D();
paths.push(path1);
paths.push(path2);
paths.push(path3);
paths.push(path4);
paths.push(path5);

let isMouseInCircle = function(x, y, circle) {
    let circleLeft = circle.x;
    let circleRight = circle.x + circle.width;
    let circleTop = circle.y;
    let circleBottom = circle.y + circle.height;

    if(x > circleLeft && x < circleRight && y > circleTop && y < circleBottom) {
        return true;
    }
    return false;
}

let mouseDown = function(event) {
    event.preventDefault();

    startX = parseInt(event.clientX) - canvasLeft;
    startY = parseInt(event.clientY) - canvasTop;

    let index = 0;
    circles[0].color = 'black';
    circles[1].color = 'black';
    circles[2].color = 'black';
    circles[3].color = 'black';
    circles[4].color = 'black';
    for (let circle of circles) {
        if (isMouseInCircle(startX, startY, circle)) {
            currentCircleIndex = index;
            isDragging = true;
            // circles[index].color = 'red';
            isSelected = true;
            selectedCircle = index;
            return;
        } else {
            currentCircleIndex = index;
            circles[index].color = 'black';
        }
        index++;
    }
    
    if ((!isMouseInCircle(startX, startY, circles[selectedCircle]) && isSelected == true && isExisting == false)){
        paths[selectedCircle].moveTo(circles[selectedCircle].x + circles[selectedCircle].width/2, circles[selectedCircle].y + 5);
        paths[selectedCircle].lineTo(startX, startY);
        c.lineWidth = 10;
        c.strokeStyle = 'black';
        c.stroke(paths[selectedCircle]);
        isExisting = true;
        return paths[selectedCircle];
    } else if ((!isMouseInCircle(startX, startY, circles[selectedCircle]) && isSelected == true && isExisting == true)){
        paths[selectedCircle].lineTo(startX, startY);
        c.lineWidth = 10;
        c.strokeStyle = 'black';
        c.stroke(paths[selectedCircle]);
    }

}
let mouseUp = function(event) {
    if (!isDragging) {
        return;
    }
    
    event.preventDefault();
    isDragging = false;
    isExisting = false;
}

let mouseOut = function(event){
    if (!isDragging) {
        return;
    }

    event.preventDefault();
    isDragging = false;
}


let mouseMove = function(event){
    if (!isDragging) {
        return;
    } else {
        event.preventDefault;
        let mouseX = parseInt(event.clientX) - canvasLeft;
        let mouseY = parseInt(event.clientY) - canvasTop;

        let dx = mouseX - startX;
        let dy = mouseY - startY;

        let currentCircle = circles[currentCircleIndex];
        currentCircle.x += dx;
        currentCircle.y += dy;
        
        // c.translate(currentCircle.x, currentCircle.y);
        draw_circles();

        startX = mouseX;
        startY = mouseY;
    }
}

let draw_playingfield = function () {
    c.fillStyle = "white";
    c.fillRect(0,0,canvas.width, canvas.height);
    c.font = "20px Arial";
    c.fillStyle = "black";
    c.fillText("LoS", 30, canvas_height * 0.7 + circles[0].height/2 - 10);
    c.fillText("5 Yards", 30, canvas_height * 0.5 + circles[0].height/2 - 10);
    c.fillText("10 Yards", 30, canvas_height * 0.3 + circles[0].height/2 - 10);
    c.fillText("15 Yards", 30, canvas_height * 0.1 + circles[0].height/2 - 10);
    let lineofscrimmage = new Path2D();
    lineofscrimmage.moveTo(0, canvas_height * 0.7 + circles[0].height/2);
    lineofscrimmage.lineTo(canvas_width, canvas_height * 0.7 + circles[0].height/2);
    c.lineWidth = 5;
    c.strokeStyle = 'black';
    c.stroke(lineofscrimmage)
    let fiveyardline = new Path2D();
    fiveyardline.moveTo(0, canvas_height * 0.5 + circles[0].height/2);
    fiveyardline.lineTo(canvas_width, canvas_height * 0.5 + circles[0].height/2);
    c.lineWidth = 5;
    c.strokeStyle = 'grey';
    c.stroke(fiveyardline);
    let tenyardline = new Path2D();
    tenyardline.moveTo(0, canvas_height * 0.3 + circles[0].height/2);
    tenyardline.lineTo(canvas_width, canvas_height * 0.3+ circles[0].height/2);
    c.lineWidth = 5;
    c.strokeStyle = 'grey';
    c.stroke(tenyardline);
    let fifteenyardline = new Path2D();
    fifteenyardline.moveTo(0, canvas_height * 0.1 + circles[0].height/2);
    fifteenyardline.lineTo(canvas_width, canvas_height * 0.1 + circles[0].height/2);
    c.lineWidth = 5;
    c.strokeStyle = 'grey';
    c.stroke(fifteenyardline);
}



let draw_circles = function() {
    console.log(currentCircleIndex);
    c.clearRect(0, 0, canvas_width, canvas_height);
    draw_playingfield();
    for (let circle of circles) {
        c.fillStyle = circle.color;
        c.fillRect(circle.x, circle.y, circle.width, circle.height);
    };
    for (let i = 0; i < paths.length; i++) {
        if (paths[i] != paths[currentCircleIndex]) {
            c.lineWidth = 10;
            c.strokeStyle = 'black';
            c.stroke(paths[i]);
        };
        paths[currentCircleIndex] = new Path2D();

    };
    // for (let path of paths) {
    //     c.lineWidth = 10;
    //     c.strokeStyle = 'black';
    //     c.stroke(path);
}


function draw(){

    c.clearRect(0,0,canvas.width,canvas.height);
    c.clearPath
    for(p=0;p<paths.length;p++){

        // get a path definition
        let path=paths[p];
        // beginPath
        c.beginPath();

        // move to the beginning point of this path
        c.moveTo(path.points[0].x,path.points[0].y);

        // draw lines to each point on the path
        for(pt=1;pt<path.points.length;pt++){
            let point=path.points[pt];
            c.lineTo(point.x,point.y);
        }

        // set the path styles (color & linewidth)
        c.strokeStyle = 'black';
        c.lineWidth= 10;

        // stroke this path
        c.stroke();

    }

}

draw_circles();
canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;
canvas.onmouseout = mouseOut;
canvas.onmousemove = mouseMove;


