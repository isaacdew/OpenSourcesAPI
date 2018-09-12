var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to the OpenSourcesAPI");
    });
    app.get("/sources", function(req, res) {
      let domains = req.query.domains;
  
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("opensourcesapi");

        if(domains) {
          domains = JSON.parse(domains);
          let query = { website: { "$in": domains }}
          dbo.collection("sources").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).send(result);
            db.close();
          });
        } else {
          dbo.collection("sources").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).send(result)
            db.close();
          });
        }
      }); 
         
      })
      
  };
  
  module.exports = appRouter;