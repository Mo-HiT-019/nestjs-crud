import {IsString, IsNumber , IsNotEmpty, IsOptional, Min, IsDecimal} from 'class-validator';


export class CreateProdctDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsNumber({maxDecimalPlaces:2})
    @IsNotEmpty()
    @Min(0)
    price:number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    stock:number;
}
