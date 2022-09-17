import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostService {

  constructor(@InjectModel('post') private readonly postModel: Model<PostDocument>) { }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    return this.postModel.create(createPostDto);
  }

  async findAll():Promise<Post[]> {
    const postall= await this.postModel.find()
    return postall;
  }

  async findOne(id: string): Promise<Post> {
    
    const postid = await this.postModel.findById(id);
    if (!postid){
      throw new BadRequestException('No encontrado')
    }
    return postid;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const postid = await this.postModel.findByIdAndUpdate(id, updatePostDto).setOptions({overwrite:true, new:true});
    if (!postid){
      throw new NotFoundException('No se realizo')
    }
    return postid
  }

  async remove(id: string) {
    return await this.postModel.findByIdAndDelete(id);
  }
}
