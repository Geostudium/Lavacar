var wms_layers = [];


        var lyr_ImagenSatelital_0 = new ol.layer.Tile({
            'title': 'Imagen Satelital',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_readeserviciodellavacar_1 = new ol.format.GeoJSON();
var features_readeserviciodellavacar_1 = format_readeserviciodellavacar_1.readFeatures(json_readeserviciodellavacar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeserviciodellavacar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeserviciodellavacar_1.addFeatures(features_readeserviciodellavacar_1);
var lyr_readeserviciodellavacar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeserviciodellavacar_1, 
                style: style_readeserviciodellavacar_1,
                interactive: true,
                title: '<img src="styles/legend/readeserviciodellavacar_1.png" /> Área de servicio del lavacar'
            });

lyr_ImagenSatelital_0.setVisible(true);lyr_readeserviciodellavacar_1.setVisible(true);
var layersList = [lyr_ImagenSatelital_0,lyr_readeserviciodellavacar_1];
lyr_readeserviciodellavacar_1.set('fieldAliases', {'id': 'id', });
lyr_readeserviciodellavacar_1.set('fieldImages', {'id': 'TextEdit', });
lyr_readeserviciodellavacar_1.set('fieldLabels', {'id': 'header label', });
lyr_readeserviciodellavacar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});