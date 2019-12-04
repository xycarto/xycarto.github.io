//set projection, resolution, and origin
var crs = new L.Proj.CRS(
  "EPSG:2193",
  "+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  {
    origin: [-1000000, 10000000],
    resolutions: [
      8960,
      4480,
      2240,
      1120,
      560,
      280,
      140,
      70,
      28,
      14,
      7,
      2.8,
      1.4,
      0.7,
      0.28,
      0.14,
      0.07
    ]
  }
);

//set additonal perimeters
var settings = {
  tms: true,
  maxZoom: 7,
  continuousWorld: true,
  attribution:
    '<a href="http://www.linz.govt.nz">Data sourced from LINZ. CC-BY 4.0</a>',
    zIndex: 2
};

//set basemap url
var topoMap_urlTemplate = L.tileLayer('https://s3-ap-southeast-2.amazonaws.com/basemaps.temp/nz_topo_basemap/NZTM/{z}/{x}/{y}.png', settings),
	  colourMap_urlTemplate = L.tileLayer('https://s3-ap-southeast-2.amazonaws.com/basemaps.temp/nz_colour_basemap/NZTM/{z}/{x}/{y}.png', settings);

var baseMaps = {
  "TopoMap": topoMap_urlTemplate,
  "ColourMap": colourMap_urlTemplate
}

// var overlayMaps = {
//     "</span><span>Topographic Base Map</span>": topoMap_urlTemplate,
// };


//set map and projection
var map = new L.Map('map', {
    crs: crs,
    continuousWorld: true,
    worldCopyJump: false,
    zoomControl: false,
    maxZoom: 7,
    minZoom: 3,
    layers: [colourMap_urlTemplate, topoMap_urlTemplate]
});

//set
//var topoMap = new L.TileLayer(topoMap_urlTemplate, settings);

//build map
//map.addLayer(topoMap);

var layers = L.control.layers(baseMaps).addTo(map);

//set opening view
map.setView([-40.9006, 174.8860], 3);



