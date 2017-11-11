//Fancybox popup
function popup(popupClass, popupConfig) {
    if (popupClass.length) {
        r_popup = popupClass.fancybox(popupConfig);
        return r_popup;
    }
}

popupCfg = {
    wrapCSS: 'popup',
    padding: ['0', '0', '0', '0'],
    scrolling: 'visible',
}

function yandexMap() {
    if ($('#map').length) {
        $.getScript("http://api-maps.yandex.ru/2.0/?load=package.full&amp;lang=ru-RU", function () {
            var myMap,
                myPlacemark;

            function init() {
                myMap = new ymaps.Map("map", {
                    center: [55.75396, 37.620393],
                    zoom: 10
                });

                myPlacemark = new ymaps.Placemark([37.620393, 37.620393], {
                    hintContent: 'Москва!',
                    balloonContent: 'Москва'
                });

                myMap.geoObjects.add(myPlacemark);
            }

            ymaps.ready(init);
        });
    }
}

function mobileZoom() {
    if ($(window).width() <= 1240) {
        $('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, user-scalable=no');
    }
}

function googleMap() {
    if ($('#map').length) {
        var map;
        var image = 'img/map-pimp.png';

        // coordinates for placemark
        var markersArray = [
            {
                icon: image,
                lat: 50.4501,
                lng: 30.523400000000038
            }
        ]

        var arrLeng = $(markersArray).length;

        function initialize() {
            // map option
            var mapOptions = {
                center: new google.maps.LatLng(50.4501, 30.523400000000038),
                disableDefaultUI: true,
                zoom: 11,
                navigationControl: !1,
                mapTypeControl: !1,
                scaleControl: !1,
                streetViewControl: !1,
                panControl: !0,
                zoomControl: !0,
                // styles: styles
            };

            // define google map
            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            // markers List
            var i = 0;
            var markerArray = new Array();
            for (i; i < arrLeng; i++) {
                markerArray[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(markersArray[i].lat, markersArray[i].lng),
                    map: map,
                    icon: image
                });
            }
        }

        // init map
        google.maps.event.addDomListener(window, 'load', initialize);
    }
}

/*slick slider*/
function mainSliderInit() {
    if ($('.slider').length) {
        $('.slider').slick({
            prevArrow: '<a class="slick-arrow-prev" />',
            nextArrow: '<a class="slick-arrow-next" />',
            dots: true,
        });
    }
}

$(document).on('ready', function () {
    mobileZoom();

});

$(window).on('resize', function () {

});