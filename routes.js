document.querySelector("#simpleDownload").addEventListener("click", function () {
	let image_data = canvas.toDataURL("image/png");
	// Neues Fenster für die Bilddaten
	window.open(image_data);});

let routestart = function() {
    paths[selectedCircle].moveTo(circles[selectedCircle].x + circles[selectedCircle].width/2, circles[selectedCircle].y + 5);
};
let twoyardbreak = function() {
    paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2, circles[selectedCircle].y - canvas_height * 0.05);
};
let sixyardbreak = function() {
    paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2, circles[selectedCircle].y - canvas_height * 0.21);
};
let twelveyardbreak = function() {
    paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2, circles[selectedCircle].y - canvas_height * 0.42);
};
let drawRoute = function () {
    c.lineWidth = 10;
    c.strokeStyle = 'black';
    c.stroke(paths[selectedCircle]);
    isExisting = true;
    return paths[selectedCircle];
};

let slant = function () {
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.1);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.1);
    }
    drawRoute();
};

let corner = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.3);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.3);
    }
    drawRoute();
};

let go = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.001, circles[selectedCircle].y - canvas_height * 0.4);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.001, circles[selectedCircle].y - canvas_height * 0.4);
    }
    drawRoute();
};

let post = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.3);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.3);
    }
    drawRoute();
};

let shoot = function () {
    routestart();
    if (circles[selectedCircle].x > canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.001, circles[selectedCircle].y - canvas_height * 0.01);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.002, circles[selectedCircle].y - canvas_height * 0.02);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.003, circles[selectedCircle].y - canvas_height * 0.028);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.005, circles[selectedCircle].y - canvas_height * 0.038);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.007, circles[selectedCircle].y - canvas_height * 0.045);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.010, circles[selectedCircle].y - canvas_height * 0.050);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.015, circles[selectedCircle].y - canvas_height * 0.055);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.025, circles[selectedCircle].y - canvas_height * 0.060);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.035, circles[selectedCircle].y - canvas_height * 0.062);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.2, circles[selectedCircle].y - canvas_height * 0.062);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.001, circles[selectedCircle].y - canvas_height * 0.01);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.002, circles[selectedCircle].y - canvas_height * 0.02);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.003, circles[selectedCircle].y - canvas_height * 0.028);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.005, circles[selectedCircle].y - canvas_height * 0.038);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.007, circles[selectedCircle].y - canvas_height * 0.045);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.010, circles[selectedCircle].y - canvas_height * 0.050);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.015, circles[selectedCircle].y - canvas_height * 0.055);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.025, circles[selectedCircle].y - canvas_height * 0.060);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.035, circles[selectedCircle].y - canvas_height * 0.062);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.2, circles[selectedCircle].y - canvas_height * 0.062);
    }
    drawRoute();
};



document.querySelector("#slant").addEventListener("click", function () {
    slant();
});

document.querySelector("#shoot").addEventListener("click", function () {
    shoot();
});

document.querySelector("#post").addEventListener("click", function () {
    post();
});

document.querySelector("#corner").addEventListener("click", function () {
    corner();
});

document.querySelector("#go").addEventListener("click", function () {
    go();
});

