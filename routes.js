document.querySelector("#clearRoutes").addEventListener("click", function () {
    clearRoutes();
});

document.querySelector("#clearCurrentRoute").addEventListener("click", function () {
    clearCurrentRoute();
});

document.querySelector("#saveToPicture").addEventListener("click", function () {
	setbackborder();
    let image_data = canvas.toDataURL("image/png");
	// Neues Fenster für die Bilddaten
	window.open(image_data);});

document.querySelector("#customRouteFinished").addEventListener("click", function () {
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    customRoutes[selectedCircle].endX = rxto;
    customRoutes[selectedCircle].endY = ryto;
    circles[selectedCircle].assignedRoute = "customRouteDraw()";
    drawRoute();
});

document.querySelector("#hotroute").addEventListener("click", function () {
    c.strokeStyle = 'red';
    c.stroke(paths[selectedCircle]);
});


let openForm = function() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 


//Functions

let dottedline = function() {
    routestyle = "dotted"
};

let solidline = function() {
    routestyle = "solid"
};

let setbackborder = function() {
    for (let circle of circles) {
        c.fillStyle = circle.color;
        c.fillRect(circle.x, circle.y, circle.width, circle.height);
        c.strokeStyle = 'black';
        c.lineWidth = 4;
        c.strokeRect(circle.x, circle.y, circle.width, circle.height);
    };
    c.fillStyle='orange';
    c.strokeStyle='orange';
    c.fillRect(circles[3].x,circles[3].y, circles[3].width, circles[3].height);
    c.strokeRect(circles[3].x,circles[3].y, circles[3].width, circles[3].height);

};

let clearRoutes = function() {
    c.clearRect(0, 0, canvas_width, canvas_height);
    for (let i = 0; i < paths.length; i++) {
        paths[i] = new Path2D();
        circles[i].assignedRoute = null;
        customRoutes = [];
        customRoutes.push({x: [], y: [], endX: null, endY: null});
        customRoutes.push({x: [], y: [], endX: null, endY: null});
        customRoutes.push({x: [], y: [], endX: null, endY: null});
        customRoutes.push({x: [], y: [], endX: null, endY: null});
        customRoutes.push({x: [], y: [], endX: null, endY: null});
    };
    draw_playingfield();
    for (let circle of circles) {
        c.fillStyle = circle.color;
        c.fillRect(circle.x, circle.y, circle.width, circle.height);
        c.strokeStyle = 'black';
        c.lineWidth = 4;
        c.strokeRect(circle.x, circle.y, circle.width, circle.height);
    };
}

let clearCurrentRoute = function() {
    c.clearRect(0, 0, canvas_width, canvas_height);
    for (let i = 0; i < paths.length; i++) {
        if (i != selectedCircle) {
            console.log("Identified")
            continue
        } else {
        paths[i] = new Path2D();
        circles[i].assignedRoute = null;
        customRoutes[i].x = [];
        customRoutes[i].y = [];
        customRoutes[i].endX = null;
        customRoutes[i].endY = null;
        }
    };
    draw_playingfield();
    for (let circle of circles) {
        c.fillStyle = circle.color;
        c.fillRect(circle.x, circle.y, circle.width, circle.height);
        c.strokeStyle = 'black';
        c.lineWidth = 4;
        c.strokeRect(circle.x, circle.y, circle.width, circle.height);
    };
    draw_circles();
    // draw_playingfield();
    // let i = 0;
    // for (let circle of circles) {
    //     // circle.x = circle.x/og_width*canvas_width;
    //     // circle.y = circle.y/og_height*canvas_height;
    //     // circle.width = circle.width/og_width*canvas_width;
    //     // circle.height = circle.height/og_height*canvas_height;
    //     c.fillStyle = circle.color;
    //     c.fillRect(circle.x, circle.y, circle.width, circle.height);
    //     c.strokeStyle = 'black';
    //     c.lineWidth = 4;
    //     c.strokeRect(circle.x, circle.y, circle.width, circle.height);
    //     if (i == selectedCircle) {
    //         console.log("Match identified")
    //         paths[i] = new Path2D();
    //         circle.assignedRoute = null;

    //     } else {
    //         paths[i] = new Path2D();
    //         let savedRoute = circle.assignedRoute;
    //         let newRoute = new Function(savedRoute);
    //         newRoute();
            
    //     }
    //     i += 1
    

    // };
}
    // for (let i = 0; i < paths.length; i++) {
    //     console.log(selectedCircle)

    // drawRoute();
    // for (let circle of circles) {
    //     c.fillStyle = circle.color;
    //     c.fillRect(circle.x, circle.y, circle.width, circle.height);
    //     c.strokeStyle = 'black';
    //     c.lineWidth = 4;
    //     c.strokeRect(circle.x, circle.y, circle.width, circle.height);
    // };




let customRouteDraw = function() {
    firstX = circles[selectedCircle].x + circles[selectedCircle].width/2;
    firstY = circles[selectedCircle].y + 5;
    DiffX = firstX-customRoutes[selectedCircle].x[0];
    DiffY = firstY-customRoutes[selectedCircle].y[0];
    paths[selectedCircle].moveTo(firstX, firstY);
    for (let i = 1; i < customRoutes[selectedCircle].x.length+1; i++){
        nextX = customRoutes[selectedCircle].x[i]+DiffX;
        nextY = customRoutes[selectedCircle].y[i]+DiffY;
        paths[selectedCircle].lineTo(nextX, nextY);
    }
    nextX = customRoutes[selectedCircle].x[customRoutes[selectedCircle].x.length-2]+DiffX;
    nextY = customRoutes[selectedCircle].y[customRoutes[selectedCircle].y.length-2]+DiffY;
    finalX = customRoutes[selectedCircle].endX+DiffX;
    finalY = customRoutes[selectedCircle].endY+DiffY;
    c.lineWidth = routewidth;
    c.strokeStyle = 'black';
    drawArrow(nextX, nextY, finalX, finalY);
    drawRoute();
}


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
    c.lineWidth = routewidth;
    c.setLineDash([]);
    c.strokeStyle = 'black';
    c.stroke(paths[selectedCircle]);
    if (routestyle == "dotted") {
        c.setLineDash([10, 30]);
        c.strokeStyle = 'white';
        c.stroke(paths[selectedCircle]);
    };
    isExisting = true;
    return paths[selectedCircle];
};

let slant = function () {
    circles[currentCircleIndex].assignedRoute = "slant()";
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.25;
        ryto = circles[selectedCircle].y - canvas_height * 0.125;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.25;
        ryto = circles[selectedCircle].y - canvas_height * 0.125;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let goallinefade = function () {
    circles[currentCircleIndex].assignedRoute = "goallinefade()";
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "whip()";
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "corner()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "go()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "seam()";
    routestart();
    twoyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "post()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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

let postcorner = function () {
    circles[currentCircleIndex].assignedRoute = "postcorner()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.1;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.3;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05;
        ryto = circles[selectedCircle].y - canvas_height * 0.5;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.1;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.3;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05;
        ryto = circles[selectedCircle].y - canvas_height * 0.5;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let cornerpost = function () {
    circles[currentCircleIndex].assignedRoute = "cornerpost()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width*0.475) {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.1;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.3;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.05;
        ryto = circles[selectedCircle].y - canvas_height * 0.5;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.1;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.3;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.05;
        ryto = circles[selectedCircle].y - canvas_height * 0.5;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let sit = function () {
    circles[currentCircleIndex].assignedRoute = "sit()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.1;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.32;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.11;
        ryto = circles[selectedCircle].y - canvas_height * 0.28;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.1;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.32;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.11;
        ryto = circles[selectedCircle].y - canvas_height * 0.28;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let dig = function () {
    circles[currentCircleIndex].assignedRoute = "dig()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        if (circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.3 <= canvas_width) {
            rxto = canvas_width - canvas_width*0.08;
        }
        else {
            rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.6;   
        };
        ryto = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxto, ryto);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    else {
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        if (circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.3 >= canvas_width*0.05) {
            rxto = canvas_width*0.08;
        }
        else {
            rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.6;   
        };
        ryto = circles[selectedCircle].y - canvas_height * 0.4;
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let wheel = function () {
    circles[currentCircleIndex].assignedRoute = "wheel()";
    routestart();
    if (circles[selectedCircle].x > canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "shoot()";
    routestart();
    if (circles[selectedCircle].x > canvas_width*0.475) {
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

let shootfake = function () {
    circles[currentCircleIndex].assignedRoute = "shootfake()";
    routestart();
    if (circles[selectedCircle].x > canvas_width*0.475) {
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.001, circles[selectedCircle].y - canvas_height * 0.01);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.002, circles[selectedCircle].y - canvas_height * 0.02);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.003, circles[selectedCircle].y - canvas_height * 0.028);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.005, circles[selectedCircle].y - canvas_height * 0.038);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.007, circles[selectedCircle].y - canvas_height * 0.045);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.010, circles[selectedCircle].y - canvas_height * 0.050);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.015, circles[selectedCircle].y - canvas_height * 0.055);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.025, circles[selectedCircle].y - canvas_height * 0.060);
        paths[selectedCircle].lineTo(circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.035, circles[selectedCircle].y - canvas_height * 0.063);
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.15;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 + canvas_width * 0.13;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.065;
        ryto = circles[selectedCircle].y - canvas_height * 0.03;
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
        rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.15;
        rxto = circles[selectedCircle].x + circles[selectedCircle].width/2 - canvas_width * 0.13;
        ryfrom = circles[selectedCircle].y - canvas_height * 0.065;
        ryto = circles[selectedCircle].y - canvas_height * 0.03;
        paths[selectedCircle].lineTo(rxfrom, ryfrom);
        paths[selectedCircle].lineTo(rxto, ryto);
    }
    drawArrow(rxfrom, ryfrom, rxto, ryto);
    drawRoute();
};

let drag = function () {
    circles[currentCircleIndex].assignedRoute = "drag()";
    routestart();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "fiveout()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "fivein()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "deepout()";
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x > canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "deepin()";
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "comeback()";
    routestart();
    twelveyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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
    circles[currentCircleIndex].assignedRoute = "hitch()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x < canvas_width*0.475) {
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

let stop = function () {
    circles[currentCircleIndex].assignedRoute = "stop()";
    routestart();
    sixyardbreak();
    if (circles[selectedCircle].x > canvas_width*0.475) {
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

document.querySelector("#dig").addEventListener("click", function () {
    dig();
});

document.querySelector("#stop").addEventListener("click", function () {
    stop();
});

document.querySelector("#postcorner").addEventListener("click", function () {
    postcorner();
});

document.querySelector("#cornerpost").addEventListener("click", function () {
    cornerpost();
});

document.querySelector("#sit").addEventListener("click", function () {
    sit();
});

document.querySelector("#shootfake").addEventListener("click", function () {
    shootfake();
});

document.querySelector("#solidline").addEventListener("click", function () {
    solidline();
});

document.querySelector("#dottedline").addEventListener("click", function () {
    dottedline();
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


// FORMATIONS -------------------------------------------------------------------------------------------------------------------------------------------

let spreadleft = function() {
    circles[0] = {x: canvas_width * 0.13, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.30, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.80, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let spreadright= function() {
    circles[0] = {x: canvas_width * 0.15, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.65, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.82, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let tightright= function() {
    circles[0] = {x: canvas_width * 0.15, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.55, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.82, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let tightleft= function() {
    circles[0] = {x: canvas_width * 0.15, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.4, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.82, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let bunchopenleft= function() {
    circles[0] = {x: canvas_width * 0.15, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.4, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.55, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let bunchopenright= function() {
    circles[0] = {x: canvas_width * 0.83, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.4, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.55, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let allbunchright= function() {
    circles[0] = {x: canvas_width * 0.625, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.4, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.55, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let allbunchleft= function() {
    circles[0] = {x: canvas_width * 0.325, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.4, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.55, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let tripsleft= function() {
    circles[0] = {x: canvas_width * 0.1, y: canvas_height * 0.70, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.4, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.25, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};

let tripsright= function() {
    circles[0] = {x: canvas_width * 0.875, y: canvas_height * 0.70, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[1] = {x: canvas_width * 0.55, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[2] = {x: canvas_width * 0.475, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[3] = {x: canvas_width * 0.475, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    circles[4] = {x: canvas_width * 0.7, y: canvas_height * 0.71, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'};
    clearRoutes();
};


document.querySelector("#spreadleft").addEventListener("click", function () {
    spreadleft();
});

document.querySelector("#spreadright").addEventListener("click", function () {
    spreadright();
});

document.querySelector("#tightright").addEventListener("click", function () {
    tightright();
});

document.querySelector("#tightleft").addEventListener("click", function () {
    tightleft();
});

document.querySelector("#bunchopenright").addEventListener("click", function () {
    bunchopenright();
});

document.querySelector("#bunchopenleft").addEventListener("click", function () {
    bunchopenleft();
});

document.querySelector("#allbunchright").addEventListener("click", function () {
    allbunchright();
});

document.querySelector("#allbunchleft").addEventListener("click", function () {
    allbunchleft();
});

document.querySelector("#tripsright").addEventListener("click", function () {
    tripsright();
});

document.querySelector("#tripsleft").addEventListener("click", function () {
    tripsleft();
});
