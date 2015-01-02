import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function(event) {
			var params = this.getProperties("name", "description");
			console.log(params);
		}
	}
});
