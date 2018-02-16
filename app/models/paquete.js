import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	precio: DS.attr('number'),
	ingredientes: DS.hasMany('ingrediente'),
	imagen: DS.attr('string')
});
