import DS from 'ember-data';

export default DS.Model.extend({
	cantidad: DS.attr('number'),
	ingredientes: DS.hasMany('ingredientes'),
	venta: DS.belongsTo('venta'),
	paquete: DS.belongsTo('paquete')

});
