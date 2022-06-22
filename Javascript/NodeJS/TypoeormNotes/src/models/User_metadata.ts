import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Users } from "./User"

@Entity()
export class User_Metadata{

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    height:number

    @Column({nullable:true})
    weight:number

    @Column({nullable:true})
    nationality:string
    
    //@OneToOne((()=>Users)) //this is a unidirectional relationship to another Entity/Model
    @OneToOne(() => Users ,(user)=>user.metadata,) //this is for binding bidirectionally 
    @JoinColumn()
    user:Users
}