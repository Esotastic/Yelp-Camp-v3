var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://i.imgur.com/qLgs3W3.jpg",
    description: "Wet, cold and horrible."
  },
  {
    name: "Desert Mesa",
    image: "https://i.imgur.com/2VZ58F3.jpg",
    description: "Dry, hot and horrible."
  },
  {
    name: "Canyon Gorge",
    image: "https://i.imgur.com/C4Qco4u.jpg",
    description: "Low, greasy and not that bad."
  }
];

function seedDB(){
  //remove all campgrounds
  Campground.remove({}, function(err){
    if (err){
      console.log(err);
    } else {
      console.log("removed all campgrounds.");
      //add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){
            console.log(err);
          } else {
            console.log("Added new campground");
            Comment.create(
              {
                text:"Whatever. Test.",
                author: "Homer"
              }, function(err, comment){
                if(err){
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment.");
                }
              });
          }
        });
      });
    }
  });

};

module.exports = seedDB;
