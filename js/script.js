// Defining map variables (for NY)

var eventAll = L.geoJson(eventData, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});

var charity = L.geoJson(categoryCharity, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var fashion = L.geoJson(categoryFashion, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var festivalsfairs = L.geoJson(categoryFestivalsFairs, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var film = L.geoJson(categoryFilm, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var food = L.geoJson(categoryFood, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var kidsfamily = L.geoJson(categoryKidsFamily, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var lecturesbooks = L.geoJson(categoryLecturesBooks, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var music = L.geoJson(categoryMusic, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var nightlife = L.geoJson(categoryNightlife, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var other = L.geoJson(categoryOther, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var performingarts = L.geoJson(categoryPerformingArts, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var sportsactivities = L.geoJson(categorySportsActivities, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});
var visualarts = L.geoJson(categoryVisualArts, {onEachFeature: function (feature, layer) { 
	layer.bindPopup('<b>' + '<p><font size="3" face="Perpetua Titling MT" color="black">' + feature.properties.name + '</font></p>'
		+ '<p><font size = "2" face="verdana" color="green">' + '<i>' + feature.properties.startDate + ' until ' + feature.properties.endDate + '</i>' + '</font></p>'
		+ '<p><font size = "3" font face="verdana" color="green">' + feature.properties.interest + ' going' + '</font></p>'
		+ '<b>'+ '<u>' + '<a href=' +feature.properties.link + '>more info' + '</a>'
		);
}
});

// Defining base layers

var grayscale = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
				attribution: false,
				zoomControl: false
				// maxZoom: 16
				});

var OpenMapSurfer_Roads = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}', {
							minZoom: 0,
							maxZoom: 20,
							attribution: false
							});

var MapQuestOpen_Aerial = L.tileLayer('http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
	attribution: false,
	subdomains: '1234'
});

// Initializing the map

var map = L.map('map', {zoomControl:false, layers: [MapQuestOpen_Aerial, eventAll]}).setView([40.7241745, -73.9841674], 11);


var baseMaps = {
    "Grayscale": grayscale,
    "OpenMapSurfer": OpenMapSurfer_Roads,
    "Aerial": MapQuestOpen_Aerial
};

var overlayMaps = {
    "All": eventAll,
    "Charity": charity,
    "Fashion": fashion,
    "Festivals & Fairs": festivalsfairs,
    "Film": film,
    "Food": food,
    "Kids & Family": kidsfamily,
    "Lectures & Books": lecturesbooks,
    "Music": music,
    "Nightlife": nightlife,
    "Other": other,
    "Performing Arts": performingarts,
    "Sports & Active Life": sportsactivities,
    "Visual Arts": visualarts 
};

L.control.layers(baseMaps, overlayMaps).addTo(map);


var sliderControl = L.control.sliderControl({position: "topleft", layer: eventAll, range:true});
map.addControl(sliderControl);
sliderControl.startSlider();

// $('#slider-timestamp').html(options.markers[ui.value].feature.properties.startDate.substr(0, 19));
// This command had some issues, edited '#slider-timestamp' in the source code (SliderControl.js) itself

// Query for making the tabs interactive 

jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
        
        // Interactivity options

        // fadeIn
        // jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
        
        // normal
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Slide1
        // jQuery('.tabs ' + currentAttrValue).siblings().slideUp(400);
        // jQuery('.tabs ' + currentAttrValue).delay(400).slideDown(400);

        // Slide2
        // jQuery('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        // Change/remove current tab to active

        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});