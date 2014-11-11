EJSON = Package.ejson.EJSON;

Meteor.subscribe("punishments");

Template.punishments.randoms = function(){
      var listlength = Punishments.find({}).count();
      var randomnumber = Math.floor(Math.random() * listlength)
      return Punishments.findOne({number: randomnumber});
  };

  //loading animation fades after 1/2 seconds
    // $("#loading").delay(250).slideUp(100);
    // $("#randoms").delay(260).slideDown(100, function(){
    //     $("#header").removeClass('hidden');
    //     $("#button").removeClass('hidden');
    //     $("#randoms").removeClass('hidden');
    //     $("#header").addClass('shown');
    //     $("#button").addClass('shown');
    //     $("#randoms").addClass('shown');
    // });   


  //generate random number on die
    // Template.header.dienumber =function(){
    //   var randomdie = Math.floor((Math.random() * 6)+1);
    //   return "../images/die"+randomdie+".gif"
    // }

  //click on "Start new bet"
  // Template.randoms.events({
  //   'click #button': function(){
  //     $('#randoms').fadeOut(300, function(){
  //       $("#createbet").fadeIn(300, function(){
  //         $("#createbet").removeClass('hidden');
  //       });
  //     });
  //    } 
  // });

  //click on logo, make all templates disappear then random reappears
  // Template.header.events({
  //   'click .logo': function(){
  //     $("#createbet").fadeOut(100, function(){
  //       $("#randoms").fadeOut(100, function(){
  //         $("#dashboard").fadeOut(100, function(){
  //         });
  //       });
  //     });
  //     $("#randoms").removeClass('hidden');
  //     $("#randoms").fadeIn(300);

  //     }
  // });


  // //Change stakes when you click (NEED TO SWIPE)
  // Template.randoms.events({
  //   'click #stakes': function () {
  //     $("#directions").fadeOut(450, function(){
  //       $("#dare").fadeOut(400, function(){
  //           Template.randoms.dare = function(){
  //             return Punishments.find();
  //           }
  //         //var randompunishment = Punishments.findOne({}, {sort: limit: 1})
  //         //$("#dare").html(randompunishment);
  //         $("#dare").fadeIn(200);
  //       });
  //     });
  //   }
  //}); 