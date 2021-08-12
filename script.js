$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: -34.397,
            lng: 150.644
        }
    });
    const geocoder = new google.maps.Geocoder();
    document.getElementById("submit-btn").addEventListener("click", () => {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
            console.log(results);
            resultsMap.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
            });
        } else {
            alert("Geocode error: " + status);
        }
    });
}
