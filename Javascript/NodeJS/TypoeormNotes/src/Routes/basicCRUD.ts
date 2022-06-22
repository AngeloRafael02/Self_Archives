import { AppDataSource } from "../DataSource";
import "reflect-metadata";
import { Users } from "../models/User";
import { User_Metadata } from "../models/User_metadata";
import express from "express";


export const BasicCRUDRoute = express.Router();

BasicCRUDRoute.route('/')

    .get(async function getAllUsers(req,res) {
        const UserRepository = AppDataSource.getRepository(Users)        
        const savedUser = await UserRepository.find({relations:{metadata:true}})
        res.json(savedUser)
    })

    .post(async function CreateAUser(req,res) {

        const generateRandomString = (myLength:number) => {
            const chars =
              " AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
            const randomArray = Array.from(
              { length: myLength }, () => chars[Math.floor(Math.random() * chars.length)]
            );
          
            const randomString = randomArray.join("");
            return randomString;
        };

        const newUser = new Users()
        newUser.first_name = generateRandomString(10);
        newUser.last_name = generateRandomString(6);
        newUser.age = Math.floor(Math.random()*100)
        newUser.description = generateRandomString(20);
        newUser.income = Math.floor(Math.random()*100000) + 10000;
        newUser.is_married = false;

        const userMetadata = new User_Metadata();
        userMetadata.height = Math.floor(Math.random()*200) + 100;
        userMetadata.weight = Math.floor(Math.random() * 500) + 50;
        userMetadata.nationality = "Confidential";
        userMetadata.user = newUser;

        const UserRepository = AppDataSource.getRepository(Users);
        await UserRepository.save(newUser).then(()=>{
            console.log("User has been Saved");
        });
        
        const MetadataRepository = AppDataSource.getRepository(User_Metadata);
        await MetadataRepository.save(userMetadata).then(()=>{
            console.log("User's MetaData has been Saved");
            
        });
        res.send(`User ${newUser.first_name}  ${newUser.last_name} and the MetaData has been saved`);
    })
    
    .put(async function ChangeUserData(req,res) {
        const generateRandomString = (myLength:number) => {
            const chars =
              " AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
            const randomArray = Array.from(
              { length: myLength },() => chars[Math.floor(Math.random() * chars.length)]
            );
          
            const randomString = randomArray.join("");
            return randomString;
        };

        const UserRepository = AppDataSource.getRepository(Users);
        const ToUpdate = await UserRepository.findOneBy({id:1})
        ToUpdate!.first_name = generateRandomString(12)
        await UserRepository.save(ToUpdate!).then(()=>{
            console.log(`${ToUpdate!.first_name} is not the new last name`)
        });      
    })

    .delete(async function RemoveAUser(req,res) {
        
    })

