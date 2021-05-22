
//Using JavaScript Promises instead of callbacks to avoid Callback Hell
//For insertOne() method it will create a Promise (return resolve or reject function) 
//JavaScript Promises have their own Error handling

//4 methods that we are implementing for this module: insertDocument(), findDocuments(), removeDocument, and updateDocument. This is analogous to the four CRUD operations (Create, Read, Update, and  Delete)

//There are 3 parameters: db (database), document (that we want to insert), and collection.
exports.insertDocument = (db, document, collection) => {
    const coll= db.collection(collection); //Using the collection() method for db that we passed in. The collection name is in the parenthesis. collection argument (inside of parenthesis) that we pass in will be a string (like campsites for example).  This string will be used as an argument  This coll constant will be used in the MongoDB server.  
    return coll.insertOne(document); //insertOne() method will return a Promise. JavaScript Promise based approach. 
};

//findDocuments() method is just used to list the documents. There is no use for the document parameter for the .findDocuments() method
//First thing that happens in the findDocuments() method is we get access to MongoDB service by this constant called coll. 
exports.findDocuments = (db, collection) => {
    const coll= db.collection(collection); //Using the collection() method for db that we passed in. The collection name is in the parenthesis. collection argument (inside of parenthesis) that we pass in will be a string (like campsites for example).  This string will be used as an argument  This coll constant will be used in the MongoDB server.  
    return coll.find().toArray(); //JavaScript Promise based approach.
};

//There are 3 parameters: db (database), document (that we want to insert), and collection.
exports.removeDocument = (db, document, collection) => {
    const coll= db.collection(collection); //Using the collection() method for db that we passed in. The collection name is in the parenthesis. collection argument (inside of parenthesis) that we pass in will be a string (like campsites for example).  This string will be used as an argument  This coll constant will be used in the MongoDB server.  
    return coll.deleteOne(document); //JavaScript Promise based approach.
};

//There are 3 parameters: db (database), document (that we want to insert), and collection.
//There is an extra parameter that will update the document that we want updated.
exports.updateDocument = (db, document, update, collection) => {
    const coll= db.collection(collection); //Using the collection() method for db that we passed in. The collection name is in the parenthesis. collection argument (inside of parenthesis) that we pass in will be a string (like campsites for example).  This string will be used as an argument  This coll constant will be used in the MongoDB server.  
    return coll.updateOne(document, {$set: update}, null); //JavaScript Promise based approach. 
};