var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        { name: "Salmon Creek", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/camping-expert-north-cascade-range-washington-lightweight-tent-0514.jpg?itok=u5IHDgjl" },
        { name: "Granite Creek", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/camping-with-kids-lake-alpine-sierra-nevada-family-night-out-0514.jpg?itok=ocbTWgVV" },
        { name: "Mule River", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg" }
    ]

    res.render("campgrounds", { campgrounds: campgrounds });
});


app.listen(3000, function(req, res) {
    console.log("The App has started");

});