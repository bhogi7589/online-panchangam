panchangam = document.getElementById("panchangam")

window.addEventListener("load", function(){
    if (this.navigator.geolocation) {
        this.navigator.geolocation.getCurrentPosition(show, exception);
    }
    else {
        window.alert("Geolocation is not supported by this browser.");
    }
});

function show(position){
    panchangam.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function exception(error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
            window.alert("Request for geolocation was denied, please allow and refresh the page.");
            break;
        case error.POSITION_UNAVAILABLE:
            window.alert("Location information is unavailable. Please try again.");
            break;
        case error.TIMEOUT:
            window.alert("The request to get user location timed out. Please try again.");
            break;
        case error.UNKNOWN_ERROR:
            window.alert("An unknown error occurred. Please try again.");
            break;
    }    
}