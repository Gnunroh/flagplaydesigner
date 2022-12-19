document.querySelector("#simpleDownload").addEventListener("click", function () {
	let image_data = canvas.toDataURL("image/png");
	// Neues Fenster für die Bilddaten
	window.open(image_data);});

let routestart = function() {
    rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2;
    ryfrom = circles[selectedCircle].y + 5;
    paths[selectedCircle].moveTo(rxfrom, ryfrom);
    return rxfrom, ryfrom;
};
let twoyardbreak = function() {
    rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2;
    ryfrom = circles[selectedCircle].y - canvas_height * 0.05;
    paths[selectedCircle].lineTo(rxfrom, ryfrom);
    return rxfrom, ryfrom;
};
let sixyardbreak = function() {
    rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2;
    ryfrom = circles[selectedCircle].y - canvas_height * 0.21;
    paths[selectedCircle].lineTo(rxfrom, ryfrom);
};
let twelveyardbreak = function() {
    rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2;
    ryfrom = circles[selectedCircle].y - canvas_height * 0.42;
    paths[selectedCircle].lineTo(rxfrom, ryfrom);
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
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.2;
        ryto = circles[selectedCircle].y - canvas_height * 0.1;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.2;
        ryto = circles[selectedCircle].y - canvas_height * 0.1;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let goallinefade = function () {
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.1;
        ryto = circles[selectedCircle].y - canvas_height * 0.25;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.1;
        ryto = circles[selectedCircle].y - canvas_height * 0.25;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let whip = function () {
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.1;
        ryto = circles[selectedCircle].y - canvas_height * 0.1;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.1;
        ryto = circles[selectedCircle].y - canvas_height * 0.1;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let corner = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15;
        ryto = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15;
        ryto = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let go = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.005;
        ryto = circles[selectedCircle].y - canvas_height * 0.6;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.005;
        ryto = circles[selectedCircle].y - canvas_height * 0.6;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let seam = function () {
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05;
        ryto = circles[selectedCircle].y - canvas_height * 0.6;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05;
        ryto = circles[selectedCircle].y - canvas_height * 0.6;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let post = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15;
        ryto = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15;
        ryto = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
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
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.282;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.284;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.13;
        ryto = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
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
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.282;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.284;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.13;
        ryto = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);

    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
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
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.035;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.063;
        ryto = circles[selectedCircle].y - canvas_height * 0.066;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
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
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.035;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.063;
        ryto = circles[selectedCircle].y - canvas_height * 0.066;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let drag = function () {
    routestart();
    if (circles[selectedCircle].x < canvas_width/2) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.001, circles[selectedCircle].y - canvas_height * 0.01);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.002, circles[selectedCircle].y - canvas_height * 0.02);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.003, circles[selectedCircle].y - canvas_height * 0.028);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.005, circles[selectedCircle].y - canvas_height * 0.038);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.007, circles[selectedCircle].y - canvas_height * 0.045);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.010, circles[selectedCircle].y - canvas_height * 0.050);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.015, circles[selectedCircle].y - canvas_height * 0.055);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.025, circles[selectedCircle].y - canvas_height * 0.060);
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.035;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.4;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.063;
        ryto = circles[selectedCircle].y - canvas_height * 0.066;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
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
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.035;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.4;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.063;
        ryto = circles[selectedCircle].y - canvas_height * 0.066;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let fiveout = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        if (circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3 >= canvas_width) {
            rxto = canvas_width - canvas_width*0.05;
        }
        else {
            rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3;   
        };
        ryto = circles[selectedCircle].y - canvas_height * 0.21;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        if (circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3 <= canvas_width*0.05) {
            rxto = canvas_width*0.05;
        }
        else {
            rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3;   
        };
        ryto = circles[selectedCircle].y - canvas_height * 0.21;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let fivein = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3;
        ryto = circles[selectedCircle].y - canvas_height * 0.21;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3;
        ryto = circles[selectedCircle].y - canvas_height * 0.21;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let deepout = function () {
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x > canvas_width/2) {
        if (circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3 >= canvas_width) {
            rxto = canvas_width - canvas_width*0.05;
        }
        else {
            rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3;   
        };
        ryto = circles[selectedCircle].y - canvas_height * 0.42;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        if (circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3 <= canvas_width*0.05) {
            rxto = canvas_width*0.05;
        }
        else {
            rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3;   
        };
        ryto = circles[selectedCircle].y - canvas_height * 0.42;
        paths[selectedCircle].lineTo(rxto, ryto);
    };
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let deepin = function () {
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3;
        ryto = circles[selectedCircle].y - canvas_height * 0.42;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3;
        ryto = circles[selectedCircle].y - canvas_height * 0.42;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let comeback = function () {
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.1;
        ryto = circles[selectedCircle].y - canvas_height * 0.35;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.1;
        ryto = circles[selectedCircle].y - canvas_height * 0.35;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let hitch = function () {
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width/2) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05;
        ryto = circles[selectedCircle].y - canvas_height * 0.18;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05;
        ryto = circles[selectedCircle].y - canvas_height * 0.18;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
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

document.querySelector("#drag").addEventListener("click", function () {
    drag();
});

document.querySelector("#seam").addEventListener("click", function () {
    seam();
});


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
