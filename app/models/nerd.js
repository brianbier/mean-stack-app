// grab the mongoose module
var mongoose = require('mongoose');

// Creating the schema
var nerdSchema = mongoose.Schema(
  {
  name: {type: String,default: ''}
  },
  {
    timestamps: true
  }
);

//define our nerd model
// module.exports allows us to pass this to other files when it is called
var Nerd = mongoose.model('Nerd',nerdSchema);

module.exports = Nerd

