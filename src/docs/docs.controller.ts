import { Controller, Transform } from '@entropy/http';
import { inject } from '@entropy/injector';
import { SnakeCasePipe } from '@entropy/pipes';
import { Route } from '@entropy/router';
import { LinkService } from '../links/link.service.ts';

export class DocsController extends Controller {
  private readonly linkService = inject(LinkService);

  @Transform({
    'page': SnakeCasePipe,
  })
  @Route.Get('/docs/:section?/:page?')
  public show(section?: string, page?: string) {
    return this.render(
      !section || !page ? 'pages/docs/index' : `pages/docs/${section}/${page}`,
      {
        pageTitle: 'Docs',
        navigationLinks: this.linkService.getNavigationLinks(),
      },
    );
  }
}
