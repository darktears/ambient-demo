var sensor = new AmbientLightSensor();
sensor.start();
sensor.onerror = function(error) {
    console.log(error);
};
sensor.onstatechange = function(e) {
    console.log(e)
};
sensor.onchange = function() {
    var light = document.getElementById('light');
    light.innerHTML = sensor.reading.illuminance + "<br> Event time stamp : " + sensor.reading.timeStamp + " Now timestamp : " + window.performance.now();
    var body = document.getElementById('body');
    if (sensor.reading.illuminance < 30) {
        body.style.background = 'black';
        body.style.color = 'white';
    } else {
        body.style.background = 'white';
        body.style.color = 'black';
    }
};
