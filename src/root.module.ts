import { Module } from '@entropy/server';
import { RootController } from './root.controller.ts';

export class RootModule implements Module {
  public readonly controllers = [
    RootController,
  ];
}
