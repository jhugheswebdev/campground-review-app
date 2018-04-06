var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//         name: "Granite Creek",
//         image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/camping-with-kids-lake-alpine-sierra-nevada-family-night-out-0514.jpg?itok=ocbTWgVV"
//     },
//     function(err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Newly created campground");
//             console.log(campground);
//         }
//     });


app.get("/", function(req, res) {
    res.render("landing");
});

//INDEX - Show all campgrounds
app.get("/campgrounds", function(req, res) {
    // get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds", { campgrounds: allCampgrounds });
        }
    });
});

//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image }
        // create a new campground and save to db
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});


app.listen(3000, function(req, res) {
    console.log("The App has started");
});