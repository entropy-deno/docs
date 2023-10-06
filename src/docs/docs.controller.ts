import { Controller } from '@entropy/http';
import { Route } from '@entropy/router';

export class DocsController extends Controller {
  @Route.Get('/docs/:page?')
  public show(page = 'index') {
    return this.render(`pages/docs/${page}`, {
      pageTitle: 'Docs',
    });
  }
}
