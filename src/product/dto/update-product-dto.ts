import { IsString,IsNumber,isString,IsOptional,Min,IsDecimal } from "class-validator"; 
import {PartialType} from '@nestjs/mapped-types';
import { CreateProdctDto } from "./create-product.dto";

export class updateProductDTO extends PartialType(CreateProdctDto){


     // No need to define properties here, as PartialType handles making them optional.
    // We can add specific validation rules if needed, but for now, it inherits.


}