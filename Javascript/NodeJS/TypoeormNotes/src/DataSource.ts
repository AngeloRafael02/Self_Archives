import { DataSource } from "typeorm";
import { Users } from "./models/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"820824",
    database:"freedb3",
    entities:[Users],
    synchronize:true,
    logging:false,
});


