import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SocialLinksService } from './social-links.service';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';

@Controller('social-links')
export class SocialLinksController {
  constructor(private readonly socialLinksService: SocialLinksService) {}

  @Post('create')
  create(@Body() createSocialLinkDto: CreateSocialLinkDto) {
    return this.socialLinksService.createSocialLinks(createSocialLinkDto);
  }

  // @Get()
  // findAll() {
  //   return this.socialLinksService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.socialLinksService.findOne(+id);
  // }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSocialLinkDto: UpdateSocialLinkDto
  ) {
    return this.socialLinksService.updateSocialLink(id, updateSocialLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialLinksService.deleteSocialLink(id);
  }
}
