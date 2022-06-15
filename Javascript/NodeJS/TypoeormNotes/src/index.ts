import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./DataSource";
import { Users } from "./models/User";
import { User_Metadata } from "./models/User_metadata";

const app = express();
app.use(express.json());

AppDataSource.initialize(
    ).then(()=>{
        console.log("Database Connected Successfully");
    }).catch((err)=>{ console.log("Error: " + err) }) ;

app.post("/OneToOne", async function (req, res, ) {
    const newUser = new Users()
    newUser.first_name = "John"
    newUser.last_name = "Johnson"
    newUser.age = 30
    newUser.description = "Rich AF"
    newUser.is_married = true
    newUser.income = 760000000

    const userMetadata = new User_Metadata()    
    userMetadata.height = 190
    userMetadata.weight = 65
    userMetadata.nationality = "Swedish"
    userMetadata.user = newUser

    const UserRepository = AppDataSource.getRepository(Users)
    await UserRepository.save(newUser)
    console.log("User has been Saved");

    const MetadataRepository = AppDataSource.getRepository(User_Metadata)
    await MetadataRepository.save(userMetadata)
    console.log("User's Metadata has been saved")
});
app.get("/OneToOne",async function (req,res) {
    const UserRepository = AppDataSource.getRepository(Users)
    const MetadataRepository = AppDataSource.getRepository(User_Metadata)
    
    const savedUser = await UserRepository.find()
    const savedMetadata = await MetadataRepository.find({where:{id:1}})
    res.json(savedUser)
    console.log("All User's Metadata: ", savedMetadata)
})




const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`Application Running a localhost:${PORT}`);
});