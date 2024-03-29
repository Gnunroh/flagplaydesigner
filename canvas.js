const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerHeight * 0.8;
canvas.heigth = window.innerHeight * 0.8;

//Resizing
canvas.width = window.innerHeight * 0.8;
canvas.height = window.innerHeight * 0.8;
c.lineWidth = 20;

//Define Values

canvas.style.border = '5px solid black';

let canvas_width = canvas.width;
let canvas_height = canvas.height;


const canvasLeft = canvas.offsetLeft + canvas.clientLeft;
const canvasTop = canvas.offsetTop + canvas.clientTop;

function drawArrow(fromx, fromy, tox, toy){
    let angle = Math.atan2(toy-fromy,tox-fromx);
    //variables to be used when creating the arrow
    const width = 22;
    let headlen = 10;
    
    //starting a new path from the head of the arrow to one of the sides of the point
    paths[selectedCircle].moveTo(tox, toy);
    paths[selectedCircle].lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));
    
    //path from the side point of the arrow, to the other side point
    paths[selectedCircle].lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));
    
    //path from the side point back to the tip of the arrow, and then again to the opposite side point
    paths[selectedCircle].lineTo(tox, toy);
    paths[selectedCircle].lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));
}

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
let squares = [];
let routewidth = 15;
let routestyle = "solid";
let currentCircleIndex = 0; //null
let isDragging = false;
let isSelected = false;
let isExisting = false;
let formationChange = false;
let prevSelectedCircle = 0;
let selectedCircle = 0;
let startX;
let startY;

circles.push({x: canvas_width * 0.13, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black', hotRoute:'no', assignedRoute:null});
circles.push({x: canvas_width * 0.325, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black', hotRoute:'no', assignedRoute:null});
circles.push({x: canvas_width * 0.525, y: canvas_height * 0.82, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'darkred', hotRoute:'no', assignedRoute:null});
circles.push({x: canvas_width * 0.525, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'orange', hotRoute:'no', assignedRoute:null});
circles.push({x: canvas_width * 0.8, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black', hotRoute:'no', assignedRoute:null});
// circles[2] = QB circles[3] = Center

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

let customRoutes = []
customRoutes.push({x: [], y: [], endX: null, endY: null});
customRoutes.push({x: [], y: [], endX: null, endY: null});
customRoutes.push({x: [], y: [], endX: null, endY: null});
customRoutes.push({x: [], y: [], endX: null, endY: null});
customRoutes.push({x: [], y: [], endX: null, endY: null});

//Define database relationships
let playName = "";
let receiver1 = circles[0];
let receiver2 = circles[1];
let receiver3 = circles[2];
let receiver4 = circles[3];
let receiver5 = circles[4];
let customRoute1 = customRoutes[0];
let customRoute2 = customRoutes[1];
let customRoute3 = customRoutes[2];
let customRoute4 = customRoutes[3];
let customRoute5 = customRoutes[4];


//Define canvas

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
    circles[2].color = 'darkred';
    circles[3].color = 'orange';
    circles[4].color = 'black';
    let i2 = 0;
    for (let circle of circles) {
        if (i2 == 2){
            c.strokeStyle = 'darkred'
        } else if (i2 == 3) {
            c.strokeStyle = 'orange'
        } else {c.strokeStyle = 'black'}
        i2 += 1;
        c.lineWidth = 4;
        c.strokeRect(circle.x, circle.y, circle.width, circle.height);
    };
    for (let circle of circles) {
        if (isMouseInCircle(startX, startY, circle)) {
            currentCircleIndex = index;
            isDragging = true;
            isSelected = true;
            selectedCircle = index;
            c.strokeStyle = 'red';
            c.lineWidth = 4;
            c.setLineDash([])
            c.strokeRect(circles[selectedCircle].x, circles[selectedCircle].y, circles[selectedCircle].width,circles[selectedCircle].height)
            return;
        } else {
            currentCircleIndex = index;
            if (index == 2){
                circles[index].color = 'darkred'
            } else if (index == 3) {
                circles[index].color = 'orange'
            } else {circles[index].color = 'black'}
            i2 += 1;
        }
        index++;
    }
    if ((!isMouseInCircle(startX, startY, circles[selectedCircle]) && isSelected == true && isExisting == false)){
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2;
        ryfrom = circles[selectedCircle].y + 5;
        rxto = startX;
        ryto = startY;
        customRoutes[selectedCircle].x.push(rxfrom);
        customRoutes[selectedCircle].y.push(ryfrom);
        customRoutes[selectedCircle].x.push(rxto);
        customRoutes[selectedCircle].y.push(ryto);
        paths[selectedCircle].moveTo(circles[selectedCircle].x + circles[selectedCircle].width/2, circles[selectedCircle].y + 5);
        paths[selectedCircle].lineTo(startX, startY);
        c.lineWidth = routewidth;
        c.strokeStyle = 'black';
        drawRoute();
        isExisting = true;
        return paths[selectedCircle];
    } else if ((!isMouseInCircle(startX, startY, circles[selectedCircle]) && isSelected == true && isExisting == true)){
        paths[selectedCircle].moveTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
        rxfrom = rxto;
        ryfrom = ryto;
        rxto = startX;
        ryto = startY;
        customRoutes[selectedCircle].x.push(rxto);
        customRoutes[selectedCircle].y.push(ryto);
        paths[selectedCircle].lineTo(startX, startY);
        drawRoute();
        c.lineWidth = routewidth;
        c.strokeStyle = 'black';
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
    c.fillText("5 Yds", 30, canvas_height * 0.5 + circles[0].height/2 - 10);
    c.fillText("10 Yds", 30, canvas_height * 0.3 + circles[0].height/2 - 10);
    c.fillText("15 Yds", 30, canvas_height * 0.1 + circles[0].height/2 - 10);
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
    c.clearRect(0, 0, canvas_width, canvas_height);
    draw_playingfield();
    let i2 = 0;
    for (let circle of circles) {
        if (i2 == selectedCircle){
            c.strokeStyle = 'red';
        } else if (i2 == 2){
            c.strokeStyle = 'darkred';
            circle.color = 'darkred';
        } else if (i2 == 3) {
            circle.color = 'orange';
            c.strokeStyle = 'orange';
        } else {c.strokeStyle = 'black'}
        i2 += 1;
        c.fillStyle = circle.color;
        c.fillRect(circle.x, circle.y, circle.width, circle.height);
        c.lineWidth = 4;
        c.strokeRect(circle.x, circle.y, circle.width, circle.height);
    };
    for (let i = 0; i < paths.length; i++) {
        if (paths[i] != paths[currentCircleIndex]) {
            c.lineWidth = routewidth;
            if (circles[i].hotRoute == 'yes'){
                c.strokeStyle = 'red'
            } else {c.strokeStyle = 'black'}
            c.stroke(paths[i]);
        };
        if(currentCircleIndex != null){
            paths[currentCircleIndex] = new Path2D();
            let savedRoute = circles[currentCircleIndex].assignedRoute;
            let newRoute = new Function(savedRoute);
            if (circles[currentCircleIndex].hotRoute == 'yes'){
                c.strokeStyle = 'red'
            } else {c.strokeStyle = 'black'}
            newRoute();
        }
    };
}

// function draw(){

//     c.clearRect(0,0,canvas.width,canvas.height);
//     c.clearPath
//     for(p=0;p<paths.length;p++){

//         // get a path definition
//         let path=paths[p];
//         // beginPath
//         c.beginPath();

//         // move to the beginning point of this path
//         c.moveTo(path.points[0].x,path.points[0].y);

//         // draw lines to each point on the path
//         for(pt=1;pt<path.points.length;pt++){
//             let point=path.points[pt];
//             c.lineTo(point.x,point.y);
//         }

//         // set the path styles (color & linewidth)
//         c.strokeStyle = 'black';
//         c.lineWidth= routewidth;
//         if (routestyle == "dotted") {
//             c.setLineDash([5, 15])
//         };

//         // stroke this path
//         c.stroke();

//     }

// }

draw_circles();
canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;
canvas.onmouseout = mouseOut;
canvas.onmousemove = mouseMove;


