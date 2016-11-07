var sensor = new AmbientLightSensor();
sensor.start();
sensor.onerror = function(error) {
    console.log(error);
};
sensor.onstatechange = function(e) {
    console.log(e)
};
sensor.onchange = function(e) {
    var light = document.getElementById('light');
    light.innerHTML = e.reading.illuminance + "<br> Event time stamp : " + e.reading.timeStamp + " Now timestamp : " + window.performance.now();
    var body = document.getElementById('body');
    if (e.reading.illuminance < 30) {
        body.style.background = 'black';
        body.style.color = 'white';
    } else {
        body.style.background = 'white';
        body.style.color = 'black';
    }
};
