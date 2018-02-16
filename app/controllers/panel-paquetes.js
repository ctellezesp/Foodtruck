import Ember from 'ember';
import { inject as service} from "@ember/service";


export default Ember.Controller.extend({
	store: service(),
	actions:{
		nuevoPedido(venta, paquete){
			this.get('store').createRecord('pedido',{
				venta: venta,
				paquete: paquete
			}).save().then((pedido)=>{
				this.transitionToRoute('hacer_pedido', pedido.id)
			})

		}
	}
});
