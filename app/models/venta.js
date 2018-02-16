import DS from 'ember-data';

export default DS.Model.extend({
	pedidos: DS.hasMany('pedido'),
	cliente: DS.attr('string')

});
