import { Controller, render, Route } from '@entropy';

export class AppController implements Controller {
  @Route.Get('/')
  public async index() {
    return await render('./views/home');
  }

  @Route.Error(404)
  public async notFound() {
    return await render('./views/404');
  }
}
