var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

    for(var i in GrassArr) {
        grassArr[i].mul();
    }

    for(var i in XotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
        xotakerArr[i].mahanal();
    }

    for(var i in GishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }

    for(var i in Gishatich2Arr) {
        gishatich2Arr[i].bazmanal();
        gishatich2Arr[i].utel();
        gishatich2Arr[i].mahanal();
    } 

