const csvFilePath='/home/isaac/node-server/OpenSourcesAPI/sources.csv'
const csv=require('csvtojson')

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to the OpenSourcesAPI");
    });
    app.get("/sources", function(req, res) {
      let domains = req.query.domains;
      if(domains) {
        domains = JSON.parse(domains);
      }
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            let newArray = [];
            for(let x = 0; x < jsonObj.length; x++) {
              if(domains) {
                for(let i = 0; i < domains.length; i++) {
                  if(jsonObj[x].field1 === domains[i]) {
                    newArray.push({
                      website: jsonObj[x].field1,
                      type: [jsonObj[x].type, jsonObj[x]['2nd type'], jsonObj[x]['3rd type']],
                      sourceNotes: jsonObj[x]['Source Notes (things to know?)']
                    })
                  }
                }
              } else {
                newArray.push({
                  website: jsonObj[x].field1,
                  type: [jsonObj[x].type, jsonObj[x]['2nd type'], jsonObj[x]['3rd type']],
                  sourceNotes: jsonObj[x]['Source Notes (things to know?)']
                })
              }
            }
      
            //console.log(jsonObj);
            res.status(200).send(newArray);
          })
         
      })
      
  };
  
  module.exports = appRouter;