    #MongoSH Notes
    # Made By: Angelo Rafael Recio
    # https://www.mongodb.com/docs/ for more documentation
    
    #To directly Connect to database:
mongosh "mongodb+srv://cluster0.cbzs3.mongodb.net/GI_DB" --apiVersi
on 1 --username RecioAngeloRafael # then you will be prompted to enter your password 
quit(); # To Quit MongoSH

db # shows current DB
show collections #shows collections
db.createUser({ # To create a User | NOTE: Study on MongoDB Roles
    user:"brad",
    pwd:"password",
    roles:["readWrite", "dbAdmin"]
});
db.createCollection('CollectionName'); # To Create A Collection (Table)
db.<CollectionName>.drop(); # To Drop a Colection
db.<CollectionName>.insertOne({key:"value",...}) #To insert One Document 
db.<CollectionName>.insertMany([{key:"value1"},{key:"value2"},...]) # To Insert Many Document
db.<CollectionName>.find(); # to show all documents
db.<CollectionName>.update({keyMatch;"ValueMatch"},{key:"newValue", ...}); #To update Document
db.<CollectionName>.update({keyMatch;"ValueMatch"},{$set:{key:"newValue", ...}}); # Use $set to keep existing data when updating
    #NOTE update() is depreciated, use updateOne() to update the first to be find or updateMany() to update multiple documents 