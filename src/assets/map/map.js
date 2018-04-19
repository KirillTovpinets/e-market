"use strict";

var mapData = config.gmap;

/*----------------------------------------------------------------------------*/
/*      Detect the browser
/*----------------------------------------------------------------------------*/

function isMobile() {
    return (/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent));
}

/*----------------------------------------------------------------------------*/
/*      Function to create your custom Google Map
/*----------------------------------------------------------------------------*/

function init() {

        // Google Map options
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

    var mapOptions = {
            draggable               : isMobile() ? false : true,
            streetViewControl       : false,
            disableDoubleClickZoom  : true,
            scrollwheel             : false,
            zoom                    : mapData.zoom,
            center                  : new google.maps.LatLng(mapData.latitude,mapData.longitude)
        },

        // Create the Google Map using the map container and options defined above
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
      
        var marker = new google.maps.Marker({
            position    : mapOptions.center,
            map         : map,
            icon        : mapData.marker
        });

}