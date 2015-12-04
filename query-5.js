/*
	For chart - 1 / content based
*/

var mapData = [];
var query_5_1_url = "http://tinyurl.com/q7egsdt";
var totalDocs = 0;

var width = 960,
	height = 480;

var point = [23.4, 45.2];

var mapCenter = [38.8833, 77.0167];

d3.json(query_5_1_url, function (data) {
	for (var i = 0; i<data.response.docs.length; i++) {
		doc = data.response.docs[i];
		mapData.push({
			address: doc["availableAtOrFrom.address.name"],
			description: doc["description"],
			lat: doc["geonames_address.geo.lat"],
			lon: doc["geonames_address.geo.lon"],
			price: doc["priceCurrency"] + " " + doc["price"],
			publisher: doc["publisher.name"],
			title: doc["title"],
			url: doc["url"]
		});
		totalDocs++;	
	}
});

d3.json(query_5_1_url, function (data) {
	for (var i = 0; i<data.response.docs.length; i++) {
		doc = data.response.docs[i];
		mapData.push({
			address: doc["availableAtOrFrom.address.name"],
			description: doc["description"],
			lat: doc["geonames_address.geo.lat"],
			lon: doc["geonames_address.geo.lon"],
			price: doc["priceCurrency"] + " " + doc["price"],
			publisher: doc["publisher.name"],
			title: doc["title"],
			url: doc["url"]
		});
		totalDocs++;	
	}
});

var width = 950,
    height = 550;

// set projection
var projection = d3.geo.mercator();

// create path variable
var path = d3.geo.path()
    .projection(projection);


d3.json("http://bl.ocks.org/mbostock/raw/4090846/us.json", function(error, topo) {

  	states = topojson.feature(topo, topo.objects.states).features

  	// set projection parameters
  	projection
      .scale(850)
      .center([-106, 37.5])

    // create svg variable
    var svg = d3.select("#query-5-1").append("svg")
    				.attr("width", width)
    				.attr("height", height);


	// add states from topojson
	svg.selectAll("path")
      .data(states).enter()
      .append("path")
      .attr("class", "feature")
      .style("fill", palette.darkblue)
      .attr("d", path);

    // put boarder around states 
  	svg.append("path")
      .datum(topojson.mesh(topo, topo.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "mesh")
      .attr("d", path);

    var points = [];
    for (var i=0; i<mapData.length; i++) { 
    	var currentData = mapData[i];
    	var lonlat = [currentData["lon"], currentData["lat"]]
    	points.push(lonlat);
    }
	
	var tooltip = d3.select('body').append('div')
		.style('position', 'absolute')
		.style('padding', '1% 2%')
		.style('background', '#F0FFFF')
		.style('max-width', '300px')
		.style('max-height', '500px')
		.style('display', 'none')
		.style('cursor', 'crosshair')
		.classed({
			"tool-tip": true
		})
		.style('overflow', 'scroll');

	svg.selectAll("circle")
		.data(mapData).enter()
		.append("circle")
			.classed({
				"titled": true
			})
			.attr("cx", function (d) { return projection([d["lon"], d["lat"]])[0]; })
			.attr("cy", function (d) { return projection([d["lon"], d["lat"]])[1]; })
			.attr("r", "8px")
			.attr("fill", palette.pink)
			.attr("data-url", function(d) {
				return d.url;
			})
			.on('click', function(d) {
				tooltip.transition()
					.style('display', "block");
				tooltip.classed({
					"active-tooltip": true
				})
				.style("opacity", "0.9")
				tooltip.html(function() {
					return "<code><a href = '"+d.url+"' target='_blank'>"+d.title+"</a></code>"+
						   "<hr />"+
						   "<code>"+d.address+"</code>"+
						   "<hr/>"+
						   "<p><code>"+d.price+"</code></p>"+
						   "<hr/>"+
						   "<p>"+d.description+"</p>"+
						   "<p>"+d.publisher+"</p>";
				})
					.style('left', (d3.event.pageX-10) + 'px')
					.style('top', (d3.event.pageY-10) + 'px');
				d3.select(this)
					.style('opacity', 0.5);
			})
			.on('mouseout', function(d) {
				d3.select(this)
					.style('opacity', 1);

			});
});
