var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Salmon Creek", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/camping-expert-north-cascade-range-washington-lightweight-tent-0514.jpg?itok=u5IHDgjl" },
    { name: "Granite Creek", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/camping-with-kids-lake-alpine-sierra-nevada-family-night-out-0514.jpg?itok=ocbTWgVV" },
    { name: "Mule River", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg" }
]

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {


    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image }
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});


app.listen(3000, function(req, res) {
    console.log("The App has started");

});