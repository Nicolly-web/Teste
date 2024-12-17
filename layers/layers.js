var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_LimiteUCsFederais_26122023_a_1 = new ol.format.GeoJSON();
var features_LimiteUCsFederais_26122023_a_1 = format_LimiteUCsFederais_26122023_a_1.readFeatures(json_LimiteUCsFederais_26122023_a_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteUCsFederais_26122023_a_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteUCsFederais_26122023_a_1.addFeatures(features_LimiteUCsFederais_26122023_a_1);
var lyr_LimiteUCsFederais_26122023_a_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteUCsFederais_26122023_a_1, 
                style: style_LimiteUCsFederais_26122023_a_1,
                popuplayertitle: 'LimiteUCsFederais_26122023_a',
                interactive: true,
    title: 'LimiteUCsFederais_26122023_a<br />\
    <img src="styles/legend/LimiteUCsFederais_26122023_a_1_0.png" /> AMAZÔNIA<br />\
    <img src="styles/legend/LimiteUCsFederais_26122023_a_1_1.png" /> CAATINGA<br />\
    <img src="styles/legend/LimiteUCsFederais_26122023_a_1_2.png" /> CERRADO<br />\
    <img src="styles/legend/LimiteUCsFederais_26122023_a_1_3.png" /> MATA ATLÂNTICA<br />\
    <img src="styles/legend/LimiteUCsFederais_26122023_a_1_4.png" /> PAMPA<br />\
    <img src="styles/legend/LimiteUCsFederais_26122023_a_1_5.png" /> PANTANAL<br />\
    <img src="styles/legend/LimiteUCsFederais_26122023_a_1_6.png" /> SISTEMA COSTEIRO-MARINHO<br />'
        });
var format_BR_Localidades_2010_v11_2 = new ol.format.GeoJSON();
var features_BR_Localidades_2010_v11_2 = format_BR_Localidades_2010_v11_2.readFeatures(json_BR_Localidades_2010_v11_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BR_Localidades_2010_v11_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BR_Localidades_2010_v11_2.addFeatures(features_BR_Localidades_2010_v11_2);
var lyr_BR_Localidades_2010_v11_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BR_Localidades_2010_v11_2, 
                style: style_BR_Localidades_2010_v11_2,
                popuplayertitle: 'BR_Localidades_2010_v1 (1)',
                interactive: true,
    title: 'BR_Localidades_2010_v1 (1)<br />\
    <img src="styles/legend/BR_Localidades_2010_v11_2_0.png" /> RURAL<br />\
    <img src="styles/legend/BR_Localidades_2010_v11_2_1.png" /> URBANO<br />\
    <img src="styles/legend/BR_Localidades_2010_v11_2_2.png" /> <br />'
        });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_LimiteUCsFederais_26122023_a_1.setVisible(true);lyr_BR_Localidades_2010_v11_2.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_LimiteUCsFederais_26122023_a_1,lyr_BR_Localidades_2010_v11_2];
lyr_LimiteUCsFederais_26122023_a_1.set('fieldAliases', {'NomeUC': 'NomeUC', 'Cnuc': 'Cnuc', 'CriacaoAno': 'CriacaoAno', 'AreaHaAlb': 'AreaHaAlb', 'PerimM': 'PerimM', 'CriacaoAto': 'CriacaoAto', 'EsferaAdm': 'EsferaAdm', 'SiglaCateg': 'SiglaCateg', 'GrupoUC': 'GrupoUC', 'UFAbrang': 'UFAbrang', 'BiomaIBGE': 'BiomaIBGE', 'BiomaCRL': 'BiomaCRL', 'GRegional': 'GRegional', 'FusoAbrang': 'FusoAbrang', 'Demarcacao': 'Demarcacao', 'EscalaUC': 'EscalaUC', 'NGI': 'NGI', });
lyr_BR_Localidades_2010_v11_2.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODI': 'CD_GEOCODI', 'TIPO': 'TIPO', 'CD_GEOCODB': 'CD_GEOCODB', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_GEOCODS': 'CD_GEOCODS', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_GEOCODD': 'CD_GEOCODD', 'NM_DISTRIT': 'NM_DISTRIT', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', 'NM_MICRO': 'NM_MICRO', 'NM_MESO': 'NM_MESO', 'NM_UF': 'NM_UF', 'CD_NIVEL': 'CD_NIVEL', 'CD_CATEGOR': 'CD_CATEGOR', 'NM_CATEGOR': 'NM_CATEGOR', 'NM_LOCALID': 'NM_LOCALID', 'LONG': 'LONG', 'LAT': 'LAT', 'ALT': 'ALT', 'GMRotation': 'GMRotation', });
lyr_LimiteUCsFederais_26122023_a_1.set('fieldImages', {'NomeUC': 'TextEdit', 'Cnuc': 'TextEdit', 'CriacaoAno': 'TextEdit', 'AreaHaAlb': 'TextEdit', 'PerimM': 'TextEdit', 'CriacaoAto': 'TextEdit', 'EsferaAdm': 'TextEdit', 'SiglaCateg': 'TextEdit', 'GrupoUC': 'TextEdit', 'UFAbrang': 'TextEdit', 'BiomaIBGE': 'TextEdit', 'BiomaCRL': 'TextEdit', 'GRegional': 'TextEdit', 'FusoAbrang': 'TextEdit', 'Demarcacao': 'TextEdit', 'EscalaUC': 'TextEdit', 'NGI': 'TextEdit', });
lyr_BR_Localidades_2010_v11_2.set('fieldImages', {'ID': 'Hidden', 'CD_GEOCODI': 'Hidden', 'TIPO': 'TextEdit', 'CD_GEOCODB': 'Hidden', 'NM_BAIRRO': 'TextEdit', 'CD_GEOCODS': 'Hidden', 'NM_SUBDIST': 'Hidden', 'CD_GEOCODD': 'Hidden', 'NM_DISTRIT': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', 'NM_MICRO': 'TextEdit', 'NM_MESO': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_NIVEL': 'Hidden', 'CD_CATEGOR': 'TextEdit', 'NM_CATEGOR': 'TextEdit', 'NM_LOCALID': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'ALT': 'TextEdit', 'GMRotation': 'TextEdit', });
lyr_LimiteUCsFederais_26122023_a_1.set('fieldLabels', {'NomeUC': 'no label', 'Cnuc': 'no label', 'CriacaoAno': 'no label', 'AreaHaAlb': 'no label', 'PerimM': 'no label', 'CriacaoAto': 'no label', 'EsferaAdm': 'no label', 'SiglaCateg': 'no label', 'GrupoUC': 'no label', 'UFAbrang': 'no label', 'BiomaIBGE': 'no label', 'BiomaCRL': 'no label', 'GRegional': 'no label', 'FusoAbrang': 'no label', 'Demarcacao': 'no label', 'EscalaUC': 'no label', 'NGI': 'no label', });
lyr_BR_Localidades_2010_v11_2.set('fieldLabels', {'TIPO': 'no label', 'NM_BAIRRO': 'no label', 'NM_DISTRIT': 'no label', 'CD_GEOCODM': 'no label', 'NM_MUNICIP': 'no label', 'NM_MICRO': 'no label', 'NM_MESO': 'no label', 'NM_UF': 'no label', 'CD_CATEGOR': 'no label', 'NM_CATEGOR': 'no label', 'NM_LOCALID': 'no label', 'LONG': 'no label', 'LAT': 'no label', 'ALT': 'no label', 'GMRotation': 'no label', });
lyr_BR_Localidades_2010_v11_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});