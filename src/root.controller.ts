import { Controller } from '@entropy/http';
import { Route } from '@entropy/router';

export class RootController extends Controller {
  @Route.Get('/')
  public index() {
    return this.renderView('home');
  }
}
