import {
    KML,
    Globe,
    GlobusTerrain,
    XYZ
} from "../../external/og/lib/@openglobus/og.esm.js";

let dieppeRouen, globus;

document.getElementById('upload').onchange = async e => {
    const color = document.getElementById('color').value;
    dieppeRouen.setColor(color);
    const KMLs = Array.from(e.target.files);
    const {entities, extent} = await dieppeRouen.addKmlFromFiles(KMLs);
    globus.planet.flyExtent(extent);
};

document.getElementById('viewExtent').onclick = () => {
    globus.planet.flyExtent(dieppeRouen.getExtent());
};

(async () => {
    dieppeRouen = new KML('dieppeRouenVector', {});
    const {entities, extent} = await dieppeRouen.addKmlFromUrl('./dieppe-rouen.kml');

    const osm = new XYZ('osm', {isBaseLayer: true, url: '//tile.openstreetmap.org/{z}/{x}/{y}.png'});

    globus = new Globe({
        target: 'globus',
        terrain: new GlobusTerrain(),
        layers: [osm],
        resourcesSrc: "../../external/og/lib/@openglobus/res",
        fontsSrc: "../../external/og/lib/@openglobus/res/fonts"
    });

    globus.planet.addLayer(dieppeRouen);
    globus.planet.flyExtent(extent);
})();
