/*
const MongoClient= require("mongodb").MongoClient; //Required the mongodb and then MongoClient object 
const assert= require("assert").strict;
const dboper= require("./operationsCallbacks"); //Acquiring the operations.js module. dboper stands for database operations

//Setting up a connection to the MongoDB server
const url= "mongodb://localhost:27017/"; //This is the port number in which MongoDB server is running: 27017 
const dbname="nucampsite"; //Give the name of the particular database we want to connect to with MongoDB. This database is called nucampsite. We created this in the Mongo Ripple exercise in Week 2

//Access the server with this configuration. We will connect the MongoClient with the MongoDB server
//First argument that we are passing into this method's parameter list is the url (that we created above)
//Second argument is an object that sets options. We are passing in useUnifiedTopology: true, which is necessary to update and rewrite the Mongo Node Driver. It is needed and helps stop deprecation warnings.
//Third argument is a callback function will have two parameters in its parameter list: err object and client. Client is used to connect to the nucampsite database and can perform various operations.
MongoClient.connect(url, {useUnifiedTopology: true}, (err, client)=> {
    //Make sure the error (err) is not null. Assert function can perform various checks and values
    assert.strictEqual(err, null); //First argument is the actual value we are checking. The second argument is the expected value that we are checking against to see if the first argument is strictly equal to the second argument. This means if err===null. If they match (err===null), the code will continue on, otherwise the assert will fail. This means it will throw an error and stop running the code and show an error in console.log
    
    console.log("Connected correctly to server."); //The server is the MongoDB server.

    const db = client.db(dbname); //Connect us to the nucampsite database in the MongoDB server. 

    //Deleting all the documents in the campsite collection. You would not normally do this with a database. This is done here so we can have a fresh, blank collection each time when we are testing.
    //Dropping a collection (or dropping a database) means that you are deleting the collection or database. Dropping anything is a serious operation because it is hard to get back
    //Dropping (deleting) a collection. First argument is the collection (name of the collection), callback function is the second argument.
    //There are many callback functions within a callback function because we are using asynchronous operations. When we are communicating with the Node Express application and the MongoDB server, it is an asynchronous operation. Although, we normally don't want to nest so many callback functions like this.
    db.dropCollection("campsites", (err, result) => {
        assert.strictEqual(err, null);
        console.log("Dropped Collection", result); //Print the result in the console.log

        //Re-creating the campsite's collection and get access to it.
        //We have commented the line before 
        //const collection= db.collection("campsites"); //Re-creating the campsite's collection
        
        //For insertDocument() method, you need to have 4 parameters: db (database), document (what we are inserted in the document), collection (name of the collection, in this case it is "campsites"), and callback function is the fourth argument that will be called at the end of each method. 
        dboper.insertDocument(db, {name: "Breadcrumb Trail Campground", description: "Test"}, "campsites", result => { //Insert a document into this collection. To do this, we have the collection object that was created in the above line and then use the insert() method.
            console.log("Insert Document:", result.ops); //ops stands for operations and in this case (when used in an insertOne() method), ops will contain an array with the document that was inserted.
            
            //callback function will be called when the documents are found
            dboper.findDocuments(db, "campsites", docs => {
                console.log("Found Documents:", docs);
                
                //For the second parameter in the updateDocument parameter list (it is {name: "Breadcrumb Trail Campground"}), Module will look for this document that has this field and it will know which document to update (only updates a single document).
                //For the third parameter it is the information that you want to update the document with (in form of an object)
                dboper.updateDocument(db, {name: "Breadcrumb Trail Campground"}, {description: "Updated Test Description"}, "campsites", result => {
                    console.log("Updated Document Count:", result.result.nModified);  //The count will give us the number of documents updated by result.result.nModified
                    
                    dboper.findDocuments(db, "campsites", docs => {
                        console.log("Found Documents:", docs);

                        dboper.removeDocument(db, {name: "Breadcrumb Trail Campground"}, "campsites", result => {
                            console.log("Deleted Document Count:", result.deletedCount);
                        
                            client.close(); //Close the client's connection to the MongoDB server. */          
                    //    }); 
                //    }); 
            //    });
        //    });
    //    }); 
//    }); 
//}); 
