import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CartsModule } from './carts/carts.module';
import { SocialLinksModule } from './social-links/social-links.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    UserModule,
    ProductModule,
    OrderModule,
    CategoriesModule,
    TagsModule,
    ReviewsModule,
    CartsModule,
    SocialLinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
