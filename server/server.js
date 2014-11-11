Meteor.publish("punishments", function(){
    return Punishments.find({});
})

