import { User } from '../../user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity('social_links')
@Unique(['userId', 'url'])
export class SocialLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column()
  platformName: string;

  // @Column({ unique: true })
  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.socialLinks)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
