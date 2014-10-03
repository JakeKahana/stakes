var listofpunishments = new Array(
  "Have The Winner Sneeze in the Loser's face",
  "Go to a WNBA Game Alone without Your Phone",
  "Drink 2 Five Hour Energy Drinks within an Hour",
  "Eat a Dog Biscuit",
  "Text Your Most Recent Ex",
  "Be the DD for the entire next weekend",
  "Send a nude selfie to the person the winner chooses",
  "Wax their junk entirely",
  "Make an announcement on the train",
  "Kiss a stranger"
  )  

_.each(listofpunishments, function(word){
	Punishments.insert(word);
});
Meteor.publish("allpunishments", function(){
	return Punishments;
});