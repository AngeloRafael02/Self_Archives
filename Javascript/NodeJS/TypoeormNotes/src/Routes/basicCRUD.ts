import { AppDataSource } from "../DataSource";
import "reflect-metadata";
import { Users } from "../models/User"
import express from "express";


export const BasicCRUDRoute = express.Router();

BasicCRUDRoute.route('/')

    .get(async function getAllUsers(req,res) {
        const UserRepository = AppDataSource.getRepository(Users)        
        const savedUser = await UserRepository.find()
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

        const UserRepository = AppDataSource.getRepository(Users);
        await UserRepository.save(newUser).then(()=>{
            console.log(`
            New User has been saved:\b
            First Name: ${newUser.first_name}\b
            Last Name: ${newUser.last_name}\b
            Description: ${newUser.description}`);
        });
        res.send(`User ${newUser.first_name}  ${newUser.last_name} has been saved`);
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
       await AppDataSource.getRepository(Users)
            .createQueryBuilder().delete()
            .from(Users).where("id = :id", { id: 1 })
            .execute().then(()=>{console.log("User has been removed")});
            res.send("Delete Method Successful");
    })

