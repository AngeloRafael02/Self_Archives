import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./DataSource";
import { BasicCRUDRoute } from "./Routes/basicCRUD";
const app = express();
app.use(express.json());


AppDataSource.initialize()
    .then(()=>{console.log("Database Connected Successfully");})
    .catch((err)=>{ console.log("Error: " + err) }
);
app.use('/BasicCRUD', BasicCRUDRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`Application Running a localhost:${PORT}`);
});