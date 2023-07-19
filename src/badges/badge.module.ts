import { Module } from '@entropy';
import { BadgeController } from './badge.controller.ts';

export class BadgeModule implements Module {
  public controllers = [
    BadgeController,
  ];
}
