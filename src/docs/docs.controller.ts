import { Controller } from '@entropy/http';
import { Route } from '@entropy/router';

export class DocsController extends Controller {
  @Route.Get('/docs')
  public index() {
    return this.render('pages/docs/index', {
      pageTitle: 'Docs',
    });
  }
}
