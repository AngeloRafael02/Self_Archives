import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { User_Metadata } from "./User_metadata"


@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length:20}) //length Attribute Limits the characters 
    first_name: string

    @Column({length:10})
    last_name: string

    @Column()
    age: number

    @Column({type:"text",nullable:true, unique:true}) //adds text as Data attribute
    description?:string | null

    @Column({type:"float",nullable:true}) //turns integer (is the default?) to float
    income?:number | null

    @Column()
    is_married:Boolean

    @OneToOne(()=>User_Metadata, (userMetadata)=>userMetadata.user , { cascade: true, onDelete: 'CASCADE' }) //this is for binding bidirectionally 
    metadata:User_Metadata

}