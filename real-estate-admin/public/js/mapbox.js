/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/mapbox.js ***!
  \********************************/
mapboxgl.accessToken = "pk.eyJ1IjoiYWxleG1hcnR6eiIsImEiOiJjbDU5czhxOHkwZGZ4M2lvNXR2ZDMxd2Q0In0.HdPL9AHny_lYurZ0VIQ8fw";
var marker;
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-86, 12],
  zoom: 6
});
map.addControl(new mapboxgl.NavigationControl());
var latInput = document.querySelector('.lat');
var lngInput = document.querySelector('.lng');
map.on('click', function (_ref) {
  var lngLat = _ref.lngLat;

  if (marker) {
    marker.remove();
  }

  latInput.value = lngLat.lat.toFixed(6);
  lngInput.value = lngLat.lng.toFixed(6);
  setMarker(lngInput.value, latInput.value);
}); // Create a marker.

if (latInput.value && lngInput.value) {
  setMarker(lngInput.value, latInput.value);
}

function setMarker(lng, lat) {
  marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
}
/******/ })()
;