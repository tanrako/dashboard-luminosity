import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/luminosity/latest-values (GET)', () => {
    return request(app.getHttpServer())
      .get('/luminosity/latest-values')
      .expect(200)
      .expect([
        { value: 8.46, timestamp: '2023-06-08 16:20:49' },
        { value: 0.42, timestamp: '2023-06-08 16:20:47' },
        { value: 5.9, timestamp: '2023-06-08 16:20:45' },
        { value: 9.93, timestamp: '2023-06-08 16:20:43' },
        { value: 5.51, timestamp: '2023-06-08 16:20:41' },
        { value: 1.94, timestamp: '2023-06-08 16:20:39' },
        { value: 7.06, timestamp: '2023-06-08 16:20:37' },
        { value: 10.53, timestamp: '2023-06-08 16:20:35' },
        { value: 11.51, timestamp: '2023-06-08 16:20:33' },
        { value: 12.93, timestamp: '2023-06-08 16:20:31' },
      ]);
  });

  it('/luminosity/highest-subset-values (GET)', () => {
    return request(app.getHttpServer())
      .get('/luminosity/highest-subset-values')
      .expect(200)
      .expect([
        { value: 1.94, timestamp: '2023-06-08 16:20:39' },
        { value: 7.06, timestamp: '2023-06-08 16:20:37' },
        { value: 10.53, timestamp: '2023-06-08 16:20:35' },
        { value: 11.51, timestamp: '2023-06-08 16:20:33' },
        { value: 12.93, timestamp: '2023-06-08 16:20:31' },
      ]);
  });
});
