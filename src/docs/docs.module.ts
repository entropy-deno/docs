import { Module } from '@entropy/server';
import { DocsController } from './docs.controller.ts';

export class DocsModule implements Module {
  public readonly controllers = [
    DocsController,
  ];
}
