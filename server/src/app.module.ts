import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
// import { EventStoreModule } from 'nestjs-eventstore';
// import { ConnectionSettings, TcpEndPoint } from 'node-eventstore-client';
import { LuminosityModule } from './module/luminosity.module';

@Module({
  imports: [
    // EventStoreModule.forRootAsync({
    //   useFactory: () => ({
    //     connectionSettings: {
    //       logLevel: 'debug',
    //       verboseLogging: true,
    //     } as ConnectionSettings,
    //     endpoint: {
    //       host: 'localhost',
    //       port: 1113,
    //     } as TcpEndPoint,
    //   }),
    // }),
    LuminosityModule,
  ],
})
export class AppModule {}
