// Initialize Leaflet Map

var map = L.map('map').setView([18.5204,73.8567],13);

// OpenStreetMap Layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{

attribution:'© OpenStreetMap'

}).addTo(map);

// Sample Parcel Polygon

var polygon=L.polygon([
[18.520,73.856],
[18.522,73.859],
[18.519,73.861],
[18.517,73.857]
],{

color:'orange',
fillColor:'#ff7800',
fillOpacity:0.5

}).addTo(map);

polygon.bindPopup("<b>Parcel ID:</b> 101<br>Owner: Ramesh Patil");

// Marker

L.marker([18.5204,73.8567])
.addTo(map)
.bindPopup("Land Office");

// Button

document.addEventListener("DOMContentLoaded",()=>{

console.log("ILRDVS Loaded Successfully");

});
