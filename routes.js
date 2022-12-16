document.querySelector("#simpleDownload").addEventListener("click", function () {
	let image_data = canvas.toDataURL("image/png");
	// Neues Fenster für die Bilddaten
	window.open(image_data);});

let routestart = function() {
    routex1 = circles[selectedCircle].x + circles[selectedCircle].width/2;
    routey1 = circles[selectedCircle].y + 5;
    paths[selectedCircle].moveTo(routex1, routey1);
    return routex1, routey1;
};
let twoyardbreak = function() {
    routex2 = circles[selectedCircle].x + circles[selectedCircle].width/2;
    routey2 = circles[selectedCircle].y - canvas_height * 0.05;
    paths[selectedCircle].lineTo(routex2, routey2);
    return routex2, routey2;
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
        routex3 = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15;
        routey3 = circles[selectedCircle].y - canvas_height * 0.1;
        paths[selectedCircle].lineTo(routex3, routey3);
    }
    else {
        routex3 = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15;
        routey3 = circles[selectedCircle].y - canvas_height * 0.1;
        paths[selectedCircle].lineTo(routex3, routey3);
    }
    console.log(routex2, routey2, routex3, routey3);
    let a = Math.atan2(routey3, routex3)
    console.log(a);
    drawRoute();
};

let goallinefade = function () {
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05, circles[selectedCircle].y - canvas_height * 0.1);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05, circles[selectedCircle].y - canvas_height * 0.25);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05, circles[selectedCircle].y - canvas_height * 0.1);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05, circles[selectedCircle].y - canvas_height * 0.25);
    }
    drawRoute();
};

let whip = function () {
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.1);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.2, circles[selectedCircle].y - canvas_height * 0.1);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.1);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.2, circles[selectedCircle].y - canvas_height * 0.1);
    }
    drawRoute();
};

let corner = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.1, circles[selectedCircle].y - canvas_height * 0.4);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.1, circles[selectedCircle].y - canvas_height * 0.4);
    }
    drawRoute();
};

let go = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.005, circles[selectedCircle].y - canvas_height * 0.6);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.005, circles[selectedCircle].y - canvas_height * 0.6);
    }
    drawRoute();
};

let post = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.1, circles[selectedCircle].y - canvas_height * 0.4);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.1, circles[selectedCircle].y - canvas_height * 0.4);
    }
    drawRoute();
};

let wheel = function () {
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
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.035, circles[selectedCircle].y - canvas_height * 0.063);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.2, circles[selectedCircle].y - canvas_height * 0.066);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.235, circles[selectedCircle].y - canvas_height * 0.069);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.245, circles[selectedCircle].y - canvas_height * 0.072);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.255, circles[selectedCircle].y - canvas_height * 0.077);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.260, circles[selectedCircle].y - canvas_height * 0.082);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.270, circles[selectedCircle].y - canvas_height * 0.087);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.275, circles[selectedCircle].y - canvas_height * 0.094);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.278, circles[selectedCircle].y - canvas_height * 0.104);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.280, circles[selectedCircle].y - canvas_height * 0.112);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.282, circles[selectedCircle].y - canvas_height * 0.13);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.284, circles[selectedCircle].y - canvas_height * 0.4);
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
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.035, circles[selectedCircle].y - canvas_height * 0.063);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.2, circles[selectedCircle].y - canvas_height * 0.066);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.235, circles[selectedCircle].y - canvas_height * 0.069);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.245, circles[selectedCircle].y - canvas_height * 0.072);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.255, circles[selectedCircle].y - canvas_height * 0.077);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.260, circles[selectedCircle].y - canvas_height * 0.082);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.270, circles[selectedCircle].y - canvas_height * 0.087);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.275, circles[selectedCircle].y - canvas_height * 0.094);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.278, circles[selectedCircle].y - canvas_height * 0.104);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.280, circles[selectedCircle].y - canvas_height * 0.112);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.282, circles[selectedCircle].y - canvas_height * 0.13);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.284, circles[selectedCircle].y - canvas_height * 0.4);
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
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.035, circles[selectedCircle].y - canvas_height * 0.063);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.2, circles[selectedCircle].y - canvas_height * 0.066);
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
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.035, circles[selectedCircle].y - canvas_height * 0.063);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.2, circles[selectedCircle].y - canvas_height * 0.066);
    }
    drawRoute();
};

let fiveout = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3, circles[selectedCircle].y - canvas_height * 0.21);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3, circles[selectedCircle].y - canvas_height * 0.21);
    }
    drawRoute();
};

let fivein = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3, circles[selectedCircle].y - canvas_height * 0.21);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3, circles[selectedCircle].y - canvas_height * 0.21);
    }
    drawRoute();
};

let deepout = function () {
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3, circles[selectedCircle].y - canvas_height * 0.42);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3, circles[selectedCircle].y - canvas_height * 0.42);
    }
    drawRoute();
};

let deepin = function () {
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3, circles[selectedCircle].y - canvas_height * 0.42);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3, circles[selectedCircle].y - canvas_height * 0.42);
    }
    drawRoute();
};

let comeback = function () {
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.3);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15, circles[selectedCircle].y - canvas_height * 0.3);
    }
    drawRoute();
};

let hitch = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05, circles[selectedCircle].y - canvas_height * 0.18);
    }
    else {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05, circles[selectedCircle].y - canvas_height * 0.18);
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

document.querySelector("#fiveout").addEventListener("click", function () {
    fiveout();
});

document.querySelector("#deepout").addEventListener("click", function () {
    deepout();
});

document.querySelector("#fivein").addEventListener("click", function () {
    fivein();
});

document.querySelector("#deepin").addEventListener("click", function () {
    deepin();
});

document.querySelector("#wheel").addEventListener("click", function () {
    wheel();
});

document.querySelector("#comeback").addEventListener("click", function () {
    comeback();
});

document.querySelector("#goallinefade").addEventListener("click", function () {
    goallinefade();
});

document.querySelector("#hitch").addEventListener("click", function () {
    hitch();
});

document.querySelector("#whip").addEventListener("click", function () {
    whip();
});


