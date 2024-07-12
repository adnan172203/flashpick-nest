import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>
  ) {}
  createTags({ ...tag }: CreateTagDto) {
    return this.tagsRepository.save(tag);
  }

  async findAllTags() {
    return this.tagsRepository.find();
  }
  findTagById(id: string) {
    const tag = this.tagsRepository.findOne({
      where: { id },
      relations: ['products'],
    });

    if (!tag) {
      throw new NotFoundException('tag not found');
    }

    return tag;
  }

  async updateTag(id: string, { ...tag }) {
    const existingTag = await this.tagsRepository.findOne({
      where: { id },
    });

    if (!existingTag) {
      throw new NotFoundException('Tag not found');
    }

    const preloadedTag = await this.tagsRepository.preload({
      id,
      ...tag,
    });

    if (!preloadedTag) {
      throw new NotFoundException('Tag not found');
    }

    this.tagsRepository.save(preloadedTag);

    return 'Tag updated';
  }

  async deleteTag(id: string) {
    const tag = await this.tagsRepository.findOneBy({ id });

    if (!tag) {
      throw new NotFoundException('tag not found');
    }

    await this.tagsRepository.remove(tag);

    return 'Tag Deleted';
  }
}
