$(window)
	.load(function (e) {
		if (document.getElementById('gmap_canvas')) {
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({
				'address': 'ew York'
			}, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var lat;
					var lng;
					lat = results[0].geometry.location.lat();
					lng = results[0].geometry.location.lng();
					initMap(lat, lng);
				} else {
					$('.push-down')
						.text("Something got wrong " + status);
				}
			});
		}

		function initMap(lat, lng) {
			myCenter = new google.maps.LatLng(lat, lng);
			map = new google.maps.Map(document.getElementById('gmap_canvas'), {
				mapTypeId: google.maps.MapTypeId.hybrid, 
				center: myCenter, 
				zoom: 12, 
				scrollwheel: false, 
				styles: [{
					"featureType": "water", 
					"elementType": "geometry", 
					"stylers": [
						{"color": "#e9e9e9"}, 
						{"lightness": 17}]}, 
						{"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}
						]
				}, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
				}, {
					"featureType": "road.highway"
					, "elementType": "geometry.stroke"
					, "stylers": [{
						"color": "#ffffff"
					}, {
						"lightness": 29
					}, {
						"weight": 0.2
					}]
				}, {
					"featureType": "road.arterial"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#ffffff"
					}, {
						"lightness": 18
					}]
				}, {
					"featureType": "road.local"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#ffffff"
					}, {
						"lightness": 16
					}]
				}, {
					"featureType": "poi"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#f5f5f5"
					}, {
						"lightness": 21
					}]
				}, {
					"featureType": "poi.park"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#dedede"
					}, {
						"lightness": 21
					}]
				}, {
					"elementType": "labels.text.stroke"
					, "stylers": [{
						"visibility": "on"
					}, {
						"color": "#ffffff"
					}, {
						"lightness": 16
					}]
				}, {
					"elementType": "labels.text.fill"
					, "stylers": [{
						"saturation": 36
					}, {
						"color": "#333333"
					}, {
						"lightness": 40
					}]
				}, {
					"elementType": "labels.icon"
					, "stylers": [{
						"visibility": "off"
					}]
				}, {
					"featureType": "transit"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#f2f2f2"
					}, {
						"lightness": 19
					}]
				}, {
					"featureType": "administrative"
					, "elementType": "geometry.fill"
					, "stylers": [{
						"color": "#fefefe"
					}, {
						"lightness": 20
					}]
				}, {
					"featureType": "administrative"
					, "elementType": "geometry.stroke"
					, "stylers": [{
						"color": "#fefefe"
					}, {
						"lightness": 17
					}, {
						"weight": 1.2
					}]
				}]
			});
			var marker = new google.maps.Marker({
				position: myCenter, icon: '_assets/img/map_marker.png', 
			});
			google.maps.event.addListener(marker, 'click', function () {
				markerInfo.open(map, marker);
			});
			marker.setMap(map);
		}
	});

