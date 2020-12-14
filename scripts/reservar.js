function haversine_distance(mk1, mk2) {
  var R = 3958.8; // Radius of the Earth in miles
  var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
  var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
  var difflat = rlat2-rlat1; // Radian difference (latitudes)
  var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  return d*1.60934; //millas to Km
}


function initMap() {
  let coord = {
    lat: 20.6739383, 
    lng: -103.4054541};
  const map = new google.maps.Map(document.getElementById('map'),{
    zoom: 11,
    streetViewControl: false,
    center: coord
  });

let markerA = new google.maps.Marker({
    position: {
      lat: 20.6739383, 
      lng: -103.4054541
  },
    map: map,
    icon: {
      url: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
    },
    title: "Marker A"
});

let markerB = new google.maps.Marker({
  position: {
    lat: 20.7244271, 
    lng: -103.3954816
},
  map: map,
  icon: {
    url: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
  },
  title: "Marker B"
});


//Drawing line
const flightPlanCoordinates = [
  { lat: markerA.position.lat(), lng: markerA.position.lng() },
  { lat: markerB.position.lat(), lng: markerB.position.lng() },
];

const flightPath = new google.maps.Polyline({
  path: flightPlanCoordinates,
  geodesic: true,
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2,
});
flightPath.setMap(map);

 

// Calculate and display the distance between markers
let distance = haversine_distance(markerA, markerB);
//document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " mi.";
console.log("Distance between markers: " + distance.toFixed(2) + " mi.")


//Function to get input values
function getAdress() {
  let firstAdrees = document.getElementById('text-partida').value;
  let secondAdress = document.getElementById('text-destino').value;
  
}


//Geocoding process converts adresses into geographic coordinates (latitude, longitude)
//Create geocoder object
var geocoder = new google.maps.Geocoder();
}