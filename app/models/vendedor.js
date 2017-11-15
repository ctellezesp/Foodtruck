import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	apellidos: DS.attr('string'),
	usuario: DS.attr('string'),
	psw: "",
	uid: DS.attr('string'),
	direccion: DS.attr('string'),
	telefono: DS.attr('number')
});
