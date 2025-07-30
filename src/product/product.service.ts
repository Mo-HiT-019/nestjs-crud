import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProdctDto } from './dto/create-product.dto';
import { updateProductDTO } from './dto/update-product-dto';
import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository:Repository<Product>
    ){}


    async create(createProductDto:CreateProdctDto):Promise<Product>{
        const product = this.productRepository.create(createProductDto);
        return this.productRepository.save(product)
    }

    async findAll():Promise<Product[]>{
        return this.productRepository.find()
    }

    async findOne(id:number):Promise<Product>{
        const product = await this.productRepository.findOneBy({id})

        if(!product){
            throw new NotFoundException(`Product with id ${id} not found`);
        }

        return product;
    }

    async update(id:number,updateProductDto:updateProductDTO):Promise<Product>{

        const product= await this.productRepository.findOneBy({id})

        if(!product){
            throw new NotFoundException(`Product with id:${id} not found`);

        }
        this.productRepository.merge(product,updateProductDto);

        return this.productRepository.save(product);
    }

    async remove(id:number):Promise<boolean>{
        const deleteResult= await this.productRepository.delete(id);

        if(deleteResult.affected===0){
              throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return true;
    }

    


}
