    #MongoSH Notes
    # Made By: Angelo Rafael Recio
    # https://www.mongodb.com/docs/ for more documentation
    
    #To directly Connect to database:
mongosh "mongodb+srv://cluster0.cbzs3.mongodb.net/GI_DB" --apiVersion 1 --username RecioAngeloRafael # then you will be prompted to enter your password 
XPWy77tpEFjHWuy
quit(); # To Quit MongoSH

db # shows current DB
show dbs # show databases
use <dbName> # Connect to database
show collections #shows collections
load("JavascriptFile.js") #run Javascript
db.createUser({ # To create a User | NOTE: Study on MongoDB Roles
    user:"brad",
    pwd:"password",
    roles:["readWrite", "dbAdmin"]
});
db.createCollection('CollectionName'); # To Create A Collection (Table)
db.<CollectionName>.drop(); # To Drop a Colection

        #CRUD
    #CREATE
db.<CollectionName>.insertOne({key:"value",...}) #To insert One Document 
db.<CollectionName>.insertMany([{key:"value1"},{key:"value2"},...]) # To Insert Many Document
    #READ
db.<CollectionName>.find(); # to show all documents
    #UPDATE
db.<CollectionName>.update({keyMatch;"ValueMatch"},{key:"newValue", ...}); #To update Document, re-writing the whole document so you may need to rewrite all of the content of the document
db.<CollectionName>.update({keyMatch;"ValueMatch"},{$set:{key:"newValue", ...}}); # Use $set to keep existing data when updating/adding new field
db.<CollectionName>.update({keyMatch;"ValueMatch"},{$unset:{key:"newValue", ...}}); # Use $unset to remove a field in a document
        #NOTE update() is depreciated, use updateOne() to update the first to be find or updateMany() to update multiple documents 
    #DELETE
db.<CollectionName>.remove({ketMatch:"ValueMatch"}) # Delete all qualifying the condition
db.<CollectionName>.remove({ketMatch:"ValueMatch"}, {justOne: true})
db.<CollectionName>.findOneAndDelete({ketMatch:"ValueMatch"})
