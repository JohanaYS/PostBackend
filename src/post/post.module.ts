import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostSchema } from './entities/post.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    { 
      name: "post", 
      schema: PostSchema 
    }
  ])
],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
