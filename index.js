//Refactor index.js so that it contains JavaScript Promises and not Callbacks.
//JavaScript Promises have their own Error handling

const MongoClient= require("mongodb").MongoClient; //Required the mongodb and then MongoClient object 
const dboper= require("./operations"); //Acquiring the operations.js module. dboper stands for database operations

//Setting up a connection to the MongoDB server
const url= "mongodb://localhost:27017/"; //This is the port number in which MongoDB server is running: 27017 
const dbname="nucampsite"; //Give the name of the particular database we want to connect to with MongoDB. This database is called nucampsite. We created this in the Mongo Ripple exercise in Week 2

//Access the server with this configuration. We will connect the MongoClient with the MongoDB server
//First argument that we are passing into this method's parameter list is the url (that we created above)
//Second argument is an object that sets options. We are passing in useUnifiedTopology: true, which is necessary to update and rewrite the Mongo Node Driver. It is needed and helps stop deprecation warnings.
//.then is used to create the JavaScript Promise
MongoClient.connect(url, {useUnifiedTopology: true}).then(client=> {
    
    console.log("Connected correctly to server."); //The server is the MongoDB server.

    const db = client.db(dbname); //Connect us to the nucampsite database in the MongoDB server. 

    //Deleting all the documents in the campsite collection. You would not normally do this with a database. This is done here so we can have a fresh, blank collection each time when we are testing.
    //Dropping a collection (or dropping a database) means that you are deleting the collection or database. Dropping anything is a serious operation because it is hard to get back
    //Dropping (deleting) a collection. First argument is the collection (name of the collection).  We are going to return a JavaScript Promise in this method by using the .then() method.
    db.dropCollection("campsites")
    .then(result => {
        console.log("Dropped Collection", result); //Print the result in the console.log
    })
    //If the JavaScript promises does not have a Resolve, the .catch() method will contain the error
    .catch(err => console.log("No collection to drop."));

        
    //For insertDocument() method, you need to have 3 parameters: db (database), document (what we are inserted in the document), collection (name of the collection, in this case it is "campsites"). 
    //.then method returns a Promise
    dboper.insertDocument(db, {name: "Breadcrumb Trail Campground", description: "Test"}, "campsites") 
    .then(result => { //Insert a document into this collection. To do this, we have the collection object that was created in the above line and then use the insert() method.
            console.log("Insert Document:", result.ops); //ops stands for operations and in this case (when used in an insertOne() method), ops will contain an array with the document that was inserted.
            
            //returns campsites collection when the documents are found. Placing the return in front ties it into the JavaScript Promise
            return dboper.findDocuments(db, "campsites");
    })
    .then(docs => { //When the JavaScript function resolves, the docs will then run.
        console.log("Found Documents:", docs);
                
        //For the second parameter in the updateDocument parameter list (it is {name: "Breadcrumb Trail Campground"}), Module will look for this document that has this field and it will know which document to update (only updates a single document).
        //For the third parameter it is the information that you want to update the document with (in form of an object)
        return dboper.updateDocument(db, {name: "Breadcrumb Trail Campground"}, {description: "Updated Test Description"}, "campsites");
    })
    //This .then() method will receive the result from the updateDocument's Promise
    .then(result => {
        console.log("Updated Document Count:", result.result.nModified);  //The count will give us the number of documents updated by result.result.nModified
                    
        return dboper.findDocuments(db, "campsites");
    })
    .then(docs => {
        console.log("Found Documents:", docs);

        return dboper.removeDocument(db, {name: "Breadcrumb Trail Campground"}, "campsites");
    })                    
    .then(result => {  
        console.log("Deleted Document Count:", result.deletedCount);
                        
        return client.close(); //Close the client's connection to the MongoDB server. */          
    })
    .catch(err => {
        console.log(err);
        client.close();
    }); 
})
 //.catch() method is used to check for errors
.catch(err => console.log(err));