var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PontMegalithiqueGueriniereJEP2026sites_1 = new ol.format.GeoJSON();
var features_PontMegalithiqueGueriniereJEP2026sites_1 = format_PontMegalithiqueGueriniereJEP2026sites_1.readFeatures(json_PontMegalithiqueGueriniereJEP2026sites_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontMegalithiqueGueriniereJEP2026sites_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontMegalithiqueGueriniereJEP2026sites_1.addFeatures(features_PontMegalithiqueGueriniereJEP2026sites_1);
var lyr_PontMegalithiqueGueriniereJEP2026sites_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontMegalithiqueGueriniereJEP2026sites_1, 
                style: style_PontMegalithiqueGueriniereJEP2026sites_1,
                popuplayertitle: 'PontMegalithiqueGueriniereJEP2026 — sites',
                interactive: true,
    title: 'PontMegalithiqueGueriniereJEP2026 — sites<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_0.png" /> ?<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_1.png" /> Fanum<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_2.png" /> Lieux particuliers<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_3.png" /> Moulin; Pigeonnier<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_4.png" /> Occupation<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_5.png" /> Passerelle mégalithique,Passerelle Mégalithique,Passerelle mégalithique ; pêcherie,Passerelle mégalithique ?<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_6.png" /> Pont<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_7.png" /> Poste de défense,Ancienne Métairie - Poste de défense,Guerche - Poste de défense,Maison Forte,Motte Castrale<br />\
    <img src="styles/legend/PontMegalithiqueGueriniereJEP2026sites_1_8.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_PontMegalithiqueGueriniereJEP2026sites_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PontMegalithiqueGueriniereJEP2026sites_1];
lyr_PontMegalithiqueGueriniereJEP2026sites_1.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Chronologie': 'Chronologie', 'Typologie': 'Typologie', 'Description': 'Description', });
lyr_PontMegalithiqueGueriniereJEP2026sites_1.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Chronologie': 'TextEdit', 'Typologie': 'TextEdit', 'Description': 'TextEdit', });
lyr_PontMegalithiqueGueriniereJEP2026sites_1.set('fieldLabels', {'fid': 'no label', 'Nom': 'inline label - always visible', 'Chronologie': 'no label', 'Typologie': 'inline label - always visible', 'Description': 'no label', });
lyr_PontMegalithiqueGueriniereJEP2026sites_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});