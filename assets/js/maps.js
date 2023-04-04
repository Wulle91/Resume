function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.132766
        }
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [{
            lat: 40.785091,
            lng: -73.968285
        },
        {
            lat: 41.084045,
            lng: -73.874245
        },
        {
            lat: 40.754932,
            lng: -73.984016
        }
    ];

    var markers = locations.map((location, i) => {
        var marker = new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });

        // add click listener to open info window
        marker.addListener('click', () => {
            var infoWindow = new google.maps.InfoWindow({
                content: marker.getLabel(),
                disableAutoPan: true
            });
            infoWindow.open(map, marker);
        });

        return marker;
    });

    // add marker clusterer
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}