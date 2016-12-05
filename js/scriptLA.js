// Defining map variables for LA

var eventAll_LA = L.geoJson(eventsDataLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});

var charity_LA = L.geoJson(charityLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var fashion_LA = L.geoJson(fashionLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var festivalsfairs_LA = L.geoJson(festivalsfairsLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var film_LA = L.geoJson(filmLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var food_LA = L.geoJson(foodLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var kidsfamily_LA = L.geoJson(kidsfamilyLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var lecturesbooks_LA = L.geoJson(lecturesbooksLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var music_LA = L.geoJson(musicLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var nightlife_LA = L.geoJson(nightlifeLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var other_LA = L.geoJson(otherLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var performingarts_LA = L.geoJson(performingartsLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var sportsactivities_LA = L.geoJson(sportsactivitiesLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var visualarts_LA = L.geoJson(visualartsLA, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});

// Defining base layers

var grayscale_LA = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
				attribution: false,
				zoomControl: false
				// maxZoom: 16
				});

// var OpenMapSurfer_Roads_LA = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}', {
// 							minZoom: 0,
// 							maxZoom: 20,
// 							attribution: false
// 							});

// var MapQuestOpen_Aerial_LA = L.tileLayer('http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
// 	attribution: false,
// 	subdomains: '1234'
// });

// Initializing the map

var map3 = L.map('map3', {zoomControl:true, layers: [OpenMapSurfer_Roads_LA, eventAll_LA]}).setView([34.010254, -118.270284], 9);


var baseMaps_LA = {
    "Grayscale": grayscale_LA//,
//     "OpenMapSurfer": OpenMapSurfer_Roads_LA,
//     "Aerial": MapQuestOpen_Aerial_LA
};

var overlayMaps_LA = {
    "All": eventAll_LA,
    "Charity": charity_LA,
    "Fashion": fashion_LA,
    "Festivals & Fairs": festivalsfairs_LA,
    "Film": film_LA,
    "Food": food_LA,
    "Kids & Family": kidsfamily_LA,
    "Lectures & Books": lecturesbooks_LA,
    "Music": music_LA,
    "Nightlife": nightlife_LA,
    "Other": other_LA,
    "Performing Arts": performingarts_LA,
    "Sports & Active Life": sportsactivities_LA,
    "Visual Arts": visualarts_LA 
};

L.control.layers(baseMaps_LA, overlayMaps_LA).addTo(map3);


var sliderControl3 = L.control.sliderControl({position: "topleft", layer: eventAll_LA, range:true});
map3.addControl(sliderControl3);
sliderControl3.startSlider();


// $('#slider-timestamp').html(options.markers[ui.value].feature.properties.startDate.substr(0, 19));
// This command had some issues, edited '#slider-timestamp' in the source code (SliderControl.js) itself
