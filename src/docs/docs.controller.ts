import { Controller } from '@entropy/http';
import { Route } from '@entropy/router';

export class DocsController extends Controller {
  @Route.Get('/docs/:section?/:page?')
  public show(section?: string, page?: string) {
    const navigationLinks = [
      ['', 'Getting Started'],
      ['/essentials/overview', 'Overview'],
      ['/essentials/configuration', 'Configuration'],
      ['/essentials/modules', 'Modules'],
    ];

    return this.render(
      !section || !page
        ? 'pages/docs/index'
        : `pages/docs/${section}/${page.replaceAll('-', '_')}`,
      {
        pageTitle: 'Docs',
        navigationLinks,
      },
    );
  }
}
