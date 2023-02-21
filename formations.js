
let spreadleft= function() {
    c.clearRect(0, 0, canvas_width, canvas_height);
    circles.push( {x: canvas_width * 0.13, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
    circles.push( {x: canvas_width * 0.45, y: canvas_height * 0.9, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
    circles.push( {x: canvas_width * 0.45, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
    circles.push( {x: canvas_width * 0.30, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
    circles.push( {x: canvas_width * 0.83, y: canvas_height * 0.7, width: canvas_width * 0.05, height: canvas_width * 0.05, color:'black'});
    rxfrom = circles[selectedCircle].x + circles[selectedCircle].width/2;
    ryfrom = circles[selectedCircle].y + 5;
    paths[selectedCircle].moveTo(rxfrom, ryfrom);
    return rxfrom, ryfrom;
};
document.querySelector("#spreadleft").addEventListener("click", function () {
    spreadleft();
});


