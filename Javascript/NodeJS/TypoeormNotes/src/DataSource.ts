import { DataSource } from "typeorm";
import { Users } from "./models/User";
import { User_Metadata } from "./models/User_metadata";

export const AppDataSource = new DataSource({
    type: "postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"820824",
    database:"freedb",
    entities:[Users,User_Metadata],
    synchronize:true,
    logging:false,
});


