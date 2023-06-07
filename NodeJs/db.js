const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/CrudMean';

MongoClient.connect(url, function(err, client) {
    if (err) {
      console.error('Failed to connect to MongoDB:', err);
      return;
    }
  
    console.log('Connected to MongoDB');
  
    // Perform database operations here
  
    // Close the connection
    client.close();
  });
  

module.exports=MongoClient;
