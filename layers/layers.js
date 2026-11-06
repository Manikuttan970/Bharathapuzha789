var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Stream_1 = new ol.format.GeoJSON();
var features_Stream_1 = format_Stream_1.readFeatures(json_Stream_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stream_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stream_1.addFeatures(features_Stream_1);
var lyr_Stream_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stream_1, 
                style: style_Stream_1,
                popuplayertitle: 'Stream',
                interactive: false,
    title: 'Stream<br />\
    <img src="styles/legend/Stream_1_0.png" /> 1 - 1376<br />\
    <img src="styles/legend/Stream_1_1.png" /> 1376 - 3089<br />\
    <img src="styles/legend/Stream_1_2.png" /> 3089 - 4504<br />\
    <img src="styles/legend/Stream_1_3.png" /> 4504 - 6231<br />\
    <img src="styles/legend/Stream_1_4.png" /> 6231 - 7623<br />' });
var format_Bharathapuzha_2 = new ol.format.GeoJSON();
var features_Bharathapuzha_2 = format_Bharathapuzha_2.readFeatures(json_Bharathapuzha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_2.addFeatures(features_Bharathapuzha_2);
var lyr_Bharathapuzha_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_2, 
                style: style_Bharathapuzha_2,
                popuplayertitle: 'Bharathapuzha',
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_2.png" /> Bharathapuzha'
            });
var format_Waterbody_3 = new ol.format.GeoJSON();
var features_Waterbody_3 = format_Waterbody_3.readFeatures(json_Waterbody_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbody_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbody_3.addFeatures(features_Waterbody_3);
var lyr_Waterbody_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbody_3, 
                style: style_Waterbody_3,
                popuplayertitle: 'Waterbody',
                interactive: false,
    title: 'Waterbody<br />\
    <img src="styles/legend/Waterbody_3_0.png" /> 1 - 2.8<br />\
    <img src="styles/legend/Waterbody_3_1.png" /> 2.8 - 4.6<br />\
    <img src="styles/legend/Waterbody_3_2.png" /> 4.6 - 6.4<br />\
    <img src="styles/legend/Waterbody_3_3.png" /> 6.4 - 8.2<br />\
    <img src="styles/legend/Waterbody_3_4.png" /> 8.2 - 10<br />' });
var format_ROAD_4 = new ol.format.GeoJSON();
var features_ROAD_4 = format_ROAD_4.readFeatures(json_ROAD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_4.addFeatures(features_ROAD_4);
var lyr_ROAD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_4, 
                style: style_ROAD_4,
                popuplayertitle: 'ROAD',
                interactive: false,
    title: 'ROAD<br />\
    <img src="styles/legend/ROAD_4_0.png" /> BOUNDARY<br />\
    <img src="styles/legend/ROAD_4_1.png" /> CART TRACK IN PLAINS<br />\
    <img src="styles/legend/ROAD_4_2.png" /> DISTRICT ROAD<br />\
    <img src="styles/legend/ROAD_4_3.png" /> FOOT PATH<br />\
    <img src="styles/legend/ROAD_4_4.png" /> NATIONAL HIGHWAY<br />\
    <img src="styles/legend/ROAD_4_5.png" /> PACK TRACK IN PLAINS<br />\
    <img src="styles/legend/ROAD_4_6.png" /> STATE HIGHWAY<br />\
    <img src="styles/legend/ROAD_4_7.png" /> VILLAGE ROAD<br />' });
var format_CHECKDAM_5 = new ol.format.GeoJSON();
var features_CHECKDAM_5 = format_CHECKDAM_5.readFeatures(json_CHECKDAM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHECKDAM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHECKDAM_5.addFeatures(features_CHECKDAM_5);
var lyr_CHECKDAM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHECKDAM_5, 
                style: style_CHECKDAM_5,
                popuplayertitle: 'CHECK DAM',
                interactive: false,
                title: '<img src="styles/legend/CHECKDAM_5.png" /> CHECK DAM'
            });
var format_GEOLOGY_6 = new ol.format.GeoJSON();
var features_GEOLOGY_6 = format_GEOLOGY_6.readFeatures(json_GEOLOGY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_6.addFeatures(features_GEOLOGY_6);
var lyr_GEOLOGY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_6, 
                style: style_GEOLOGY_6,
                popuplayertitle: 'GEOLOGY',
                interactive: false,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_6_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/GEOLOGY_6_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_6_2.png" /> Charnockite Group of rocks<br />\
    <img src="styles/legend/GEOLOGY_6_3.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/GEOLOGY_6_4.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/GEOLOGY_6_5.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY_6_6.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/GEOLOGY_6_7.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/GEOLOGY_6_8.png" /> Sand and Silt<br />\
    <img src="styles/legend/GEOLOGY_6_9.png" /> Sandstone and clay with lignite interc<br />\
    <img src="styles/legend/GEOLOGY_6_10.png" /> Tank/WB/River<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Stream_1.setVisible(true);lyr_Bharathapuzha_2.setVisible(true);lyr_Waterbody_3.setVisible(true);lyr_ROAD_4.setVisible(true);lyr_CHECKDAM_5.setVisible(true);lyr_GEOLOGY_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Stream_1,lyr_Bharathapuzha_2,lyr_Waterbody_3,lyr_ROAD_4,lyr_CHECKDAM_5,lyr_GEOLOGY_6];
lyr_Stream_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_Bharathapuzha_2.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Waterbody_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ROAD_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_CHECKDAM_5.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_GEOLOGY_6.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_Stream_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORDER1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Bharathapuzha_2.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_Waterbody_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ROAD_4.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_CHECKDAM_5.set('fieldImages', {'Name': 'TextEdit', 'name1': 'TextEdit', 'Photo': 'TextEdit', });
lyr_GEOLOGY_6.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Stream_1.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_Bharathapuzha_2.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Waterbody_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ROAD_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_CHECKDAM_5.set('fieldLabels', {'Name': 'no label', 'name1': 'no label', 'Photo': 'no label', });
lyr_GEOLOGY_6.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_GEOLOGY_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});