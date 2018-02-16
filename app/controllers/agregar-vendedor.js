import Ember from 'ember';
import {inject as service} from "@ember/service";

export default Ember.Controller.extend({
	firebase: service('firebaseApp'),
	actions: {
		save(vendedor){
			console.log(vendedor.usuario + "@tellez.com")
			vendedor.save();
			this.get('firebase').auth().createUserWithEmailAndPassword(vendedor.get('usuario')+"@tellez.com", vendedor.psw).then((usuario)=>{
				vendedor.set('uid', usuario.uid)
				vendedor.save().then(()=>{
					this.get('store').createRecord('account', {
						uid: usuario.uid,
						perfil: 'vendor',
					})
				})
			}).then(()=>{

				window.Materialize.toast('Vendedor Agregado Correctamente', 4000),
				this.transitionToRoute('vendedores')
			}).catch((error)=>{
				console.log(error)

			});
		}
	}
});
