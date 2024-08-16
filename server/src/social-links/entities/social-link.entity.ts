import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('social_links')
export class SocialLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column()
  platform: string;

  @Column()
  url: string;
}
