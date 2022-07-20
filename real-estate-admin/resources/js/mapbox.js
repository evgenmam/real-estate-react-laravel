mapboxgl.accessToken = process.env.MIX_ACCESS_TOKEN
let marker;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-86, 12],
    zoom: 6,
});

map.addControl(new mapboxgl.NavigationControl());

const latInput = document.querySelector('.lat')
const lngInput = document.querySelector('.lng')

map.on('click', ({lngLat}) => {
    if (marker){
        marker.remove()
    }

    latInput.value = lngLat.lat.toFixed(6)
    lngInput.value = lngLat.lng.toFixed(6)

    setMarker( lngInput.value, latInput.value)
});

// Create a marker.
if (latInput.value && lngInput.value) {
    setMarker( lngInput.value, latInput.value)
}

function setMarker(lng, lat){
    marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map)
}
