import { Controller, Route } from '@entropy';

export class RootController extends Controller {
  @Route.Get('/')
  public index() {
    return this.renderView('home');
  }
}
