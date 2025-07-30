import { timeStamp } from 'console';
import { text } from 'stream/consumers';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;
    

    @Column({type:'text',nullable:true})
    description:string;

    @Column({type:'decimal',precision:10,scale:2})
    price:number;

    @Column({default:0})
    stock:number;
    
    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP',onUpdate:'CURRENT_TIMESTAMP'})
    updatedAt:Date;
}