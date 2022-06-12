import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./DataSource";
import { User } from "./models/User";


const app = express();
app.use(express.json());


app.get("/", function (req, res, ) {
    res.send("Hello World");
    console.log("Request Success");
});


AppDataSource.initialize(
).then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{ console.log("Error: " + err) }) ;

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`Application Running a localhost:${PORT}`);
});