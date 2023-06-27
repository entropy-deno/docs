import { Module } from '@entropy';
import { AppController } from './app.controller.ts';

export class AppModule implements Module {
  public controllers = [
    AppController,
  ];
}
