mapboxgl.accessToken = 'pk.eyJ1IjoiZG9ub3Rjb25zdW1lIiwiYSI6ImNsamRwdGJmZzI3NTMza3AyNmE3cHhvNWIifQ.N2DsZR6yQZRmOSlrhFlBCw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center){
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: center, // starting position [lng, lat]
    zoom: 15, // starting zoom
    })

    map.addControl(new mapboxgl.NavigationControl())

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    map.addControl(directions, "top-left");


}




