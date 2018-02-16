import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('agregar_vendedor');
  this.route('panel');
  this.route('vendedores');
  this.route('info_vendedor', { path: "/info/:vendorid"});
  this.route('editar', { path: "/edit/:vendorid"});
  this.route('agregar_pregunta');
  this.route('preguntas');
  this.route('editar_pregunta', {path: "/pregunta/:pregid"});
  this.route('agregar_paquete');
  this.route('paquetes');
  this.route('paquete', {path: "/paquete/:packid"});
  this.route('panel_vendedor', {path: "/vender"});
  this.route('panel_paquetes', {path: '/:venta_id/agregar'});
  this.route('hacer_pedido', {path: "/:pedido_id/addPaquete/"});
  this.route('info_pedido');
  this.route('agregar_ingredientesExtra', {path: "/extra/:packid"});
  this.route('ing_extra');
});

export default Router;
