var latitude = 5.809320;
var longitude = -55.206474;
var map = L.map('map', { zoomControl: false } ).setView([ latitude, longitude], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([latitude, longitude]).addTo(map);
map.doubleClickZoom.disable();
map.dragging.disable();
map.scrollWheelZoom.disable();
