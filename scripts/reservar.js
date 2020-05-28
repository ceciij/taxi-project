function initMap() {
  var coord = {
    lat: 20.6739383, 
    lng: -103.4054541};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });

  var marker = new google.maps.Marker({
    position: coord,
    map: map
  })

}

document.addEventListener('.burger')('click', ()=>{
  document.querySelector('.burger').classList.add("isVisible");
})