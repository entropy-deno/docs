import { Module } from '@entropy/server';
import { BadgeController } from './badge.controller.ts';

export class BadgeModule implements Module {
  public controllers = [
    BadgeController,
  ];
}
