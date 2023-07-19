import { Module } from '@entropy';
import { RootController } from './root.controller.ts';

export class RootModule implements Module {
  public controllers = [
    RootController,
  ];
}
