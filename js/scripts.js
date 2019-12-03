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

//set basemap url
var aerialElev_urlTemplate =
  "https://s3-ap-southeast-2.amazonaws.com/basemaps.temp/nz_topo_basemap/NZTM/{z}/{x}/{y}.png";

//set additonal perimeters
var settings = {
  tms: true,
  maxZoom: 14,
  continuousWorld: true,
  attribution:
    '<a href="http://www.linz.govt.nz">Data sourced from LINZ. CC-BY 4.0</a>' //Simple attribution for linz
};

//set map and projection
var map = new L.Map("map", {
  crs: crs,
  continuousWorld: true,
  worldCopyJump: false,
  zoomControl: false
});

//set
var aerialElev = new L.TileLayer(aerialElev_urlTemplate, settings);

//build map
map.addLayer(aerialElev);

//set opening view
map.setView([-41.29, 175.4], 3);

