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
});

export default Router;
