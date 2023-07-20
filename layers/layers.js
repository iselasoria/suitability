var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_IncomeBrackets_1 = new ol.format.GeoJSON();
var features_IncomeBrackets_1 = format_IncomeBrackets_1.readFeatures(json_IncomeBrackets_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncomeBrackets_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncomeBrackets_1.addFeatures(features_IncomeBrackets_1);
var lyr_IncomeBrackets_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IncomeBrackets_1, 
                style: style_IncomeBrackets_1,
                interactive: false,
    title: 'Income Brackets<br />\
    <img src="styles/legend/IncomeBrackets_1_0.png" />  5k - 50k<br />\
    <img src="styles/legend/IncomeBrackets_1_1.png" />  51k - 100k<br />\
    <img src="styles/legend/IncomeBrackets_1_2.png" />  101k - 125k<br />\
    <img src="styles/legend/IncomeBrackets_1_3.png" />  126k - 200k<br />\
    <img src="styles/legend/IncomeBrackets_1_4.png" />  201k - 250k<br />'
        });
var format_PopulationDensity_2 = new ol.format.GeoJSON();
var features_PopulationDensity_2 = format_PopulationDensity_2.readFeatures(json_PopulationDensity_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationDensity_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationDensity_2.addFeatures(features_PopulationDensity_2);
var lyr_PopulationDensity_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationDensity_2, 
                style: style_PopulationDensity_2,
                interactive: false,
    title: 'Population Density<br />\
    <img src="styles/legend/PopulationDensity_2_0.png" />  0 - 8,000<br />\
    <img src="styles/legend/PopulationDensity_2_1.png" />  8001 - 17,000 <br />\
    <img src="styles/legend/PopulationDensity_2_2.png" />  17001 - 29,000 <br />\
    <img src="styles/legend/PopulationDensity_2_3.png" />  29001 - 56,000 <br />\
    <img src="styles/legend/PopulationDensity_2_4.png" /> 56001 - 119,000<br />'
        });
var format_CarComutersPct_3 = new ol.format.GeoJSON();
var features_CarComutersPct_3 = format_CarComutersPct_3.readFeatures(json_CarComutersPct_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarComutersPct_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarComutersPct_3.addFeatures(features_CarComutersPct_3);
var lyr_CarComutersPct_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CarComutersPct_3, 
                style: style_CarComutersPct_3,
                interactive: false,
    title: 'Car Comuters Pct<br />\
    <img src="styles/legend/CarComutersPct_3_0.png" />  0% - 5%<br />\
    <img src="styles/legend/CarComutersPct_3_1.png" />  5% - 9% <br />\
    <img src="styles/legend/CarComutersPct_3_2.png" />  9% - 14% <br />\
    <img src="styles/legend/CarComutersPct_3_3.png" />  14% - 25% <br />\
    <img src="styles/legend/CarComutersPct_3_4.png" />  25% - 45%<br />'
        });
var format_Roads_4 = new ol.format.GeoJSON();
var features_Roads_4 = format_Roads_4.readFeatures(json_Roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_4.addFeatures(features_Roads_4);
var lyr_Roads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_4, 
                style: style_Roads_4,
                interactive: false,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_4_0.png" /> I<br />\
    <img src="styles/legend/Roads_4_1.png" /> S<br />\
    <img src="styles/legend/Roads_4_2.png" /> <br />'
        });
var format_TopPerformerPlacement_5 = new ol.format.GeoJSON();
var features_TopPerformerPlacement_5 = format_TopPerformerPlacement_5.readFeatures(json_TopPerformerPlacement_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopPerformerPlacement_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopPerformerPlacement_5.addFeatures(features_TopPerformerPlacement_5);
var lyr_TopPerformerPlacement_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TopPerformerPlacement_5, 
                style: style_TopPerformerPlacement_5,
                interactive: true,
    title: 'Top Performer Placement<br />\
    <img src="styles/legend/TopPerformerPlacement_5_0.png" /> 1-3<br />\
    <img src="styles/legend/TopPerformerPlacement_5_1.png" /> 4-6<br />\
    <img src="styles/legend/TopPerformerPlacement_5_2.png" /> 6-9<br />'
        });

lyr_CartoDbPositron_0.setVisible(true);lyr_IncomeBrackets_1.setVisible(true);lyr_PopulationDensity_2.setVisible(true);lyr_CarComutersPct_3.setVisible(true);lyr_Roads_4.setVisible(true);lyr_TopPerformerPlacement_5.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_IncomeBrackets_1,lyr_PopulationDensity_2,lyr_CarComutersPct_3,lyr_Roads_4,lyr_TopPerformerPlacement_5];
lyr_IncomeBrackets_1.set('fieldAliases', {'tract': 'tract', 'med_hh_inc': 'med_hh_inc', 'med_hh_i_1': 'med_hh_i_1', 'ami_catego': 'ami_catego', 'below_med_': 'below_med_', 'below_60pc': 'below_60pc', 'below_mode': 'below_mode', 'sup_dist': 'sup_dist', 'csa': 'csa', 'spa': 'spa', 'ESRI_OID': 'ESRI_OID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_PopulationDensity_2.set('fieldAliases', {'DP2_HC03_V': 'DP2_HC03_V', 'DP3_HC03_V': 'DP3_HC03_V', 'DP3_HC03_1': 'DP3_HC03_1', 'DP3_HC03_2': 'DP3_HC03_2', 'DP5_HC01_V': 'DP5_HC01_V', 'area': 'area', 'density': 'density', 'total_pop': 'total_pop', 'pct_commut': 'pct_commut', });
lyr_CarComutersPct_3.set('fieldAliases', {'DP2_HC03_V': 'DP2_HC03_V', 'DP3_HC03_V': 'DP3_HC03_V', 'DP3_HC03_1': 'DP3_HC03_1', 'DP3_HC03_2': 'DP3_HC03_2', 'DP5_HC01_V': 'DP5_HC01_V', 'area': 'area', 'density': 'density', 'total_pop': 'total_pop', 'pct_commut': 'pct_commut', });
lyr_Roads_4.set('fieldAliases', {'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', });
lyr_TopPerformerPlacement_5.set('fieldAliases', {'designatio': 'designatio', 'Coordinate': 'Coordinate', 'placement': 'placement', });
lyr_IncomeBrackets_1.set('fieldImages', {'tract': 'TextEdit', 'med_hh_inc': 'Range', 'med_hh_i_1': 'Range', 'ami_catego': 'TextEdit', 'below_med_': 'TextEdit', 'below_60pc': 'TextEdit', 'below_mode': 'TextEdit', 'sup_dist': 'TextEdit', 'csa': 'TextEdit', 'spa': 'TextEdit', 'ESRI_OID': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_PopulationDensity_2.set('fieldImages', {'DP2_HC03_V': 'TextEdit', 'DP3_HC03_V': 'TextEdit', 'DP3_HC03_1': 'TextEdit', 'DP3_HC03_2': 'TextEdit', 'DP5_HC01_V': 'TextEdit', 'area': 'TextEdit', 'density': 'TextEdit', 'total_pop': 'Range', 'pct_commut': 'TextEdit', });
lyr_CarComutersPct_3.set('fieldImages', {'DP2_HC03_V': 'TextEdit', 'DP3_HC03_V': 'TextEdit', 'DP3_HC03_1': 'TextEdit', 'DP3_HC03_2': 'TextEdit', 'DP5_HC01_V': 'TextEdit', 'area': 'TextEdit', 'density': 'TextEdit', 'total_pop': 'Range', 'pct_commut': 'TextEdit', });
lyr_Roads_4.set('fieldImages', {'LINEARID': 'TextEdit', 'FULLNAME': 'TextEdit', 'RTTYP': 'TextEdit', 'MTFCC': 'TextEdit', });
lyr_TopPerformerPlacement_5.set('fieldImages', {'designatio': 'TextEdit', 'Coordinate': 'TextEdit', 'placement': 'Range', });
lyr_IncomeBrackets_1.set('fieldLabels', {'tract': 'no label', 'med_hh_inc': 'no label', 'med_hh_i_1': 'no label', 'ami_catego': 'no label', 'below_med_': 'no label', 'below_60pc': 'no label', 'below_mode': 'no label', 'sup_dist': 'no label', 'csa': 'no label', 'spa': 'no label', 'ESRI_OID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_PopulationDensity_2.set('fieldLabels', {'DP2_HC03_V': 'header label', 'DP3_HC03_V': 'no label', 'DP3_HC03_1': 'no label', 'DP3_HC03_2': 'no label', 'DP5_HC01_V': 'no label', 'area': 'no label', 'density': 'header label', 'total_pop': 'no label', 'pct_commut': 'no label', });
lyr_CarComutersPct_3.set('fieldLabels', {'DP2_HC03_V': 'no label', 'DP3_HC03_V': 'no label', 'DP3_HC03_1': 'no label', 'DP3_HC03_2': 'no label', 'DP5_HC01_V': 'no label', 'area': 'no label', 'density': 'no label', 'total_pop': 'no label', 'pct_commut': 'inline label', });
lyr_Roads_4.set('fieldLabels', {'LINEARID': 'no label', 'FULLNAME': 'no label', 'RTTYP': 'no label', 'MTFCC': 'no label', });
lyr_TopPerformerPlacement_5.set('fieldLabels', {'designatio': 'no label', 'Coordinate': 'no label', 'placement': 'no label', });
lyr_TopPerformerPlacement_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});