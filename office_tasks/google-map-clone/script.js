mapboxgl.accessToken =
  'pk.eyJ1Ijoicm9ja3lheWFuIiwiYSI6ImNrYXN2bG5kejB0MTkycXFmNXpldHluZGIifQ.RzQd7yGli-fVyKmDkD1mmw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  //   console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(position) {
  //   setupMap([-2.24, 53.48]);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  //   var directions = new MapboxDirections({
  //     accessToken: mapboxgl.accessToken,
  //   });
  //   map.addControl(directions, 'top-left');

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/cycling',
  });
  map.addControl(directions, 'top-left');
}
