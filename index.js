const MongoClient= require("mongodb").MongoClient; //Required the mongodb and then MongoClient object 
const assert= require("assert").strict;

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
        const collection= db.collection("campsites"); //Re-creating the campsite's collection
        collection.insertOne({name: "Breadcrumb Trail Campground", description: "Test"}, //Insert a document into this collection. To do this, we have the collection object that was created in the above line and then use the insert() method.
        (err, result) => { //Second argument to the insertOne() method is a callback function. Callback function takes two parameters as well: err and result. Always use err first when using node.
            assert.strictEqual(err, null);
            console.log("Insert Document:", result.ops); //ops stands for operations and in this case (when used in an insertOne() method), ops will contain an array with the document that was inserted.

            //Print all the documents in the console that is in the collection. Use the .find() method. Give the .find() method an empty parameter list if you want to find all the documents in a collection, otherwise you specify it inside of its parameter list.
            collection.find().toArray((err, docs) => { //.toArray() method converts the documents to an array of objects so we can console.log it. It has a parameter list of err and then docs.
                assert.strictEqual(err, null);
                console.log("Found Documents:", docs);
                client.close(); //Close the client's connection to the MongoDB server.
            }); 
        }); 
    }); 
});