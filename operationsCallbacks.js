/*
const assert = require("assert").strict; //Importing the assert module

//4 methods that we are implementing for this module: insertDocument(), findDocuments(), removeDocument, and updateDocument. This is analogous to the four CRUD operations (Create, Read, Update, and  Delete)
//There are 4 parameters: db (database), document (that we want to insert), collection, and callbackfunction that will be called at the end of each method. 
exports.insertDocument = (db, document, collection, callback) => {
    const coll= db.collection(collection); //Using the collection() method for db that we passed in. The collection name is in the parenthesis. collection argument (inside of parenthesis) that we pass in will be a string (like campsites for example).  This string will be used as an argument  This coll constant will be used in the MongoDB server.  
    coll.insertOne(document, (err, result) => {  //This method is going to interactive with the database and MongoDB server. insertOne() method will take 2 arguments: document (represented in the form of a JavaScript object) and callback function with 2 parameters (error (err) and result). Callback function takes two parameters as well: err and result. Always use err first when using node. 
        assert.strictEqual(err, null); //assert.strictEqual() method checks to see if err (error) is null. If err is not null, there will be an error and assert will stop the application. If err is null, code will continue to run.
        callback(result); //callback function will have result as an argument. This callback is defined somewhere else in the code. We deliver the result of this insertDocument() method) to the callback, which will do whatever the callback function is required to do. 
    }); 
};

//findDocuments() method is just used to list the documents. There is no use for the document parameter for the .findDocuments() method
//First thing that happens in the findDocuments() method is we get access to MongoDB service by this constant called coll. 
exports.findDocuments = (db, collection, callback) => {
    const coll= db.collection(collection); //Using the collection() method for db that we passed in. The collection name is in the parenthesis. collection argument (inside of parenthesis) that we pass in will be a string (like campsites for example).  This string will be used as an argument  This coll constant will be used in the MongoDB server.  
    coll.find().toArray((err, docs) => { //.find() method is used to find documents in a collection.  It has an empty parameter list, which means it will find all documents in the collection. toArray() method will place all the documents found in an array. toArray() method will have a callback function 
        assert.strictEqual(err, null); //If there is no error (err===null), then the code will continue to run. Otherwise, it won't run.
        callback(docs); //callback function will take the docs array
    });
};

//There are 4 parameters: db (database), document (that we want to insert), collection, and callbackfunction that will be called at the end of each method. 
exports.removeDocument = (db, document, collection, callback) => {
    const coll= db.collection(collection); //Using the collection() method for db that we passed in. The collection name is in the parenthesis. collection argument (inside of parenthesis) that we pass in will be a string (like campsites for example).  This string will be used as an argument  This coll constant will be used in the MongoDB server.  
    coll.deleteOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result); //The result will be an object that will say what was deleted.
    });
};

//There are 4 parameters: db (database), document (that we want to insert), collection, and callbackfunction that will be called at the end of each method. 
//There is an extra parameter that will update the document that we want updated.
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll= db.collection(collection); //Using the collection() method for db that we passed in. The collection name is in the parenthesis. collection argument (inside of parenthesis) that we pass in will be a string (like campsites for example).  This string will be used as an argument  This coll constant will be used in the MongoDB server.  
    coll.updateOne(document, {$set: update}, null, (err, result)=> { //updateOne() method has four parameters: document (pass in an object that contains information about the document that we want to update), {$set: update} is an object that is used with MondoDB (set update operator will write over existing information), third parameter is for us to pass in optional configuration which we don't need ( so null is placed), fourth parameter is a callback function which will give us an error or the result of the operation. 
        assert.strictEqual(err,null);
        callback(result);
    }); 
}; */