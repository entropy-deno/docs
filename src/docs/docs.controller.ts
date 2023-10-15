import { Controller } from '@entropy/http';
import { inject } from '@entropy/injector';
import { Route } from '@entropy/router';
import { LinkService } from '../links/link.service.ts';

export class DocsController extends Controller {
  private readonly linkService = inject(LinkService);

  @Route.Get('/docs/:section?/:page?')
  public show(section?: string, page?: string) {
    return this.render(
      !section || !page
        ? 'pages/docs/index'
        : `pages/docs/${section}/${page.replaceAll('-', '_')}`,
      {
        pageTitle: 'Docs',
        navigationLinks: this.linkService.getNavigationLinks(),
      },
    );
  }
}
