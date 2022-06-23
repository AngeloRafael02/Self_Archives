import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"


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
}