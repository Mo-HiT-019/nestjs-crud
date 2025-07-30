import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProdctDto } from './dto/create-product.dto';
import { updateProductDTO } from './dto/update-product-dto';

@Controller('products')
export class ProductController {

    constructor(private readonly productService:ProductService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createProdctDto:CreateProdctDto){
        return this.productService.create(createProdctDto)
    }

    @Get() 
    findAll(){
        return this.productService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.productService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id:number,@Body() updateProductDto:updateProductDTO){
        return this.productService.update(id,updateProductDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id')id:number){
        return this.productService.remove(id)
    }
    

}
