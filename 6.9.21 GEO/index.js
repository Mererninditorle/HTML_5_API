ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.75168328, 37.66680180],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.75168328, 37.66680180]
            },
            properties: {
                iconContent: 'IT HUB',
            },
        });
    myMap.geoObjects
        .add(myGeoObject)
}