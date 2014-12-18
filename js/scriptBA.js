// Defining map variables for BA (bay-area)

var eventAll_BA = L.geoJson(eventsDataBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});

var charity_BA = L.geoJson(charityBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var fashion_BA = L.geoJson(fashionBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var festivalsfairs_BA = L.geoJson(festivalsfairsBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var film_BA = L.geoJson(filmBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var food_BA = L.geoJson(foodBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var kidsfamily_BA = L.geoJson(kidsfamilyBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var lecturesbooks_BA = L.geoJson(lecturesbooksBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var music_BA = L.geoJson(musicBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var nightlife_BA = L.geoJson(nightlifeBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var other_BA = L.geoJson(otherBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var performingarts_BA = L.geoJson(performingartsBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var sportsactivities_BA = L.geoJson(sportsactivitiesBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var visualarts_BA = L.geoJson(visualartsBA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});

// Defining base layers

var grayscale_BA = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
				attribution: false,
				zoomControl: false
				// maxZoom: 16
				});

var OpenMapSurfer_Roads_BA = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}', {
							minZoom: 0,
							maxZoom: 20,
							attribution: false
							});

var MapQuestOpen_Aerial_BA = L.tileLayer('http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
	attribution: false,
	subdomains: '1234'
});

// Initializing the map

var map2 = L.map('map2', {zoomControl:false, layers: [OpenMapSurfer_Roads_BA, eventAll_BA]}).setView([37.723491, -122.245339], 9);


var baseMaps_BA = {
    "Grayscale": grayscale_BA,
    "OpenMapSurfer": OpenMapSurfer_Roads_BA,
    "Aerial": MapQuestOpen_Aerial_BA
};

var overlayMaps_BA = {
    "All": eventAll_BA,
    "Charity": charity_BA,
    "Fashion": fashion_BA,
    "Festivals & Fairs": festivalsfairs_BA,
    "Film": film_BA,
    "Food": food_BA,
    "Kids & Family": kidsfamily_BA,
    "Lectures & Books": lecturesbooks_BA,
    "Music": music_BA,
    "Nightlife": nightlife_BA,
    "Other": other_BA,
    "Performing Arts": performingarts_BA,
    "Sports & Active Life": sportsactivities_BA,
    "Visual Arts": visualarts_BA 
};

L.control.layers(baseMaps_BA, overlayMaps_BA).addTo(map2);


var sliderControl2 = L.control.sliderControl({position: "topleft", layer: eventAll_BA, range:true});
map2.addControl(sliderControl2);
sliderControl2.startSlider();


// $('#slider-timestamp').html(options.markers[ui.value].feature.properties.startDate.substr(0, 19));
// This command had some issues, edited '#slider-timestamp' in the source code (SliderControl.js) itself

