import { Controller, render, Route } from '@entropy';

export class RootController implements Controller {
  @Route.Get('/')
  public async index() {
    return await render('home');
  }
}
