const csvFilePath='/home/isaac/node-server/OpenSourcesAPI/sources.csv'
const csv=require('csvtojson')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


csv()
    .fromFile(csvFilePath)
        .then((jsonObj)=>{
            let sources = {};
            MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("opensourcesapi");
                for(let x = 0; x < jsonObj.length; x++) {
                    sources = {
                    website: jsonObj[x].field1,
                    type: [jsonObj[x].type, jsonObj[x]['2nd type'], jsonObj[x]['3rd type']],
                    sourceNotes: jsonObj[x]['Source Notes (things to know?)']
                    }
                    
                        
                        dbo.collection("sources").insertOne(sources, function(err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        db.close();
                        });
                    

                    sources = {};
                }
            });
             

          })