import Ember from 'ember';

import { inject as service } from "@ember/service";

export default Ember.Controller.extend({
	session: service(),

	actions: {
		signIn(user, pass){
			this.get('session').open('firebase', {
			  provider: 'password',
			  email: user + "@gmail.com",
			  password: pass
			}).then(()=>{
				this.transitionToRoute('panel')
				
			}).catch((error)=>{
				switch(error.code){
					case "auth/user-not-found":
					window.Materialize.toast('Error', 2000)
					break;

				}
				console.log(error)
			});

		}
	}
});
