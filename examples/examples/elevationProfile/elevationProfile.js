import {
    Globe,
    GlobusTerrain,
    EmptyTerrain,
    MapboxTerrain,
    XYZ,
    control,
    utils,
    LonLat
} from "../../external/og/lib/@openglobus/og.esm.js";


function toQuadKey(x, y, z) {
    var index = '';
    for (let i = z; i > 0; i--) {
        var b = 0;
        var mask = 1 << (i - 1);
        if ((x & mask) !== 0) b++;
        if ((y & mask) !== 0) b += 2;
        index += b.toString();
    }
    return index;
}

let sat = new XYZ("sat", {
    subdomains: ['t0', 't1', 't2', 't3'],
    url: "https://ecn.{s}.tiles.virtualearth.net/tiles/a{quad}.jpeg?n=z&g=7146",
    isBaseLayer: true,
    maxNativeZoom: 19,
    defaultTextures: [{ color: "#001522" }, { color: "#E4E6F3" }],
    attribution: `<div style="transform: scale(0.8); margin-top:-2px;"><a href="http://www.bing.com" target="_blank"><img style="position: relative; top: 2px;" title="Bing Imagery" src="https://sandcastle.cesium.com/CesiumUnminified/Assets/Images/bing_maps_credit.png"></a> © 2021 Microsoft Corporation</div>`,
    urlRewrite: function (s, u) {
        return utils.stringTemplate(u, {
            's': this._getSubdomain(),
            'quad': toQuadKey(s.tileX, s.tileY, s.tileZoom)
        });
    },
    specular: [0.00063, 0.00055, 0.00032],
    ambient: "rgb(90,90,90)",
    diffuse: "rgb(350,350,350)",
    shininess: 20,
    nightTextureCoefficient: 2.7
});

let st = new XYZ("swisstopo", {
    url: "",
    visibility: true,
    isBaseLayer: false,
    minNativeZoom: 0,
    maxNativeZoom: 0,
    attribution: `Digital Elevation swissALTI3D ©swisstopo`,
});

let osm = new XYZ("osm", {
    isBaseLayer: true,
    url: "http://tile.openstreetmap.org/{z}/{x}/{y}.png",
    visibility: true,
    attribution: 'Data @ OpenStreetMap contributors, ODbL',
    maxNativeZoom: 19,
    defaultTextures: [{ color: "#AAD3DF" }, { color: "#F2EFE9" }],
    isSRGB: false,
    shininess: 18, //specular: "rgb(0.16575, 0.14152, 0.06375)",
    specular: [0.00063, 0.00055, 0.00032],
    ambient: [0.2, 0.2, 0.3],
    diffuse: [0.9, 0.9, 0.7],
});

var highResTerrain = new MapboxTerrain(null, {
    maxZoom: 17,
    url: "//terrain.openglobus.org/public/eu10/{z}/{x}/{y}.png",
    plainGridSize: 128,
    gridSizeByZoom: [
        64, 32, 16, 8, 8, 8, 8, 16, 16, 16, 16, 16, 32, 32, 32, 64, 64, 64, 64, 32, 16, 8
    ]
});

const globus = new Globe({
    target: "earth",
    name: "Earth",
    terrain: highResTerrain,
    layers: [sat, st],
    atmosphereEnabled: true,
    resourcesSrc: "../../external/og/lib/@openglobus/res",
    fontsSrc: "../../external/og/lib/@openglobus/res/fonts",
    viewExtent: [8.077, 46.69, 8.77, 46.83]
});

globus.planet.addControl(new control.ElevationProfileControl());