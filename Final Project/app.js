function initMap() {
  const styledMapType = new google.maps.StyledMapType(
    [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          {
            "invert_lightness": true
          },
          {
            "saturation": 10
          },
          {
            "lightness": 30
          },
          {
            "gamma": 0.5
          },
          {
            "hue": "#435158"
          }
      ],
    },
  ],
  {name: 'Styled Map'});

  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    }
  });
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}