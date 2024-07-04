import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploaderModule } from './fileUploader/fileUploader.module';

@Module({
  imports: [FileUploaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
