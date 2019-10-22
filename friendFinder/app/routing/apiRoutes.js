var path=require('path')
var friends=require('../data/friends')
module.exports=function(app){
app.get("/api/friends", function(req, res) {


 
    res.json(friends)
});
     
 app.post("/api/friends", function(req, res) {
     var bestMatch = {name:"name"}
var userData = req.body;
console.log(userData)
 
    res.json(bestMatch)
 });











}