// grab the model we just created
var Nerd = require('./models/nerd')

module.exports = function(app){
      // server routes ===========================================================
      // handle things like api calls
      // authentication routes

      // Sample API Route
      app.get('api/nerds',function(req,res){
        // use mongoose to get all nerds in the database
        Nerd.find({}).sort({createdAt: 'desc'}).exec(function(err, nerds){
          // if there is an error retrieving, send  the error message
            // nothing after res.send(err) will execute
          if(err){
            res.send(500,{
              error: err,
              success: false
            });
          }else{
            //return all nerds in JSON format
            res.send(200,{
              nerd: nerds,
              success: true 
            });
          }
        });
      });

   // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)




      // Front End Routes ==========================================
      // Routes are send to be handle by angular request
      app.get('*',function(req,res){
        res.sendfile('.public/views/index.html');
      })





}