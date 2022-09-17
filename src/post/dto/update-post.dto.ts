import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;
    

}
