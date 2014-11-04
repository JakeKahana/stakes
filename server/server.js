Meteor.publish('actions', function(){
	observeSubscription(this, 'actions', function(){
		return Punishments.find();
	})
});