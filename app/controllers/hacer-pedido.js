import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		changed(ingrediente){
			if(this.get('model.ingredientes').findBy('id', ingrediente.get('id')))
				this.get('model.ingredientes').removeObject(this.get('model.ingredientes').findBy('id', ingrediente.get('id')));
			else
				this.get('model.ingredientes').pushObject(ingrediente)
		},
		savePedido(pedido){
			pedido.save();
			window.Materialize.toast("Pedido Agregado correctamente", 4000)
		}
	}
});
