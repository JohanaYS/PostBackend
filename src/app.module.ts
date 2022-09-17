import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Johana:modulo78@bimagenes.5mt6rsf.mongodb.net/?retryWrites=true&w=majority'), 
  PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
