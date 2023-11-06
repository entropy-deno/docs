import { Controller, HttpError, HttpStatus } from '@entropy/http';
import { inject } from '@entropy/injector';
import { SnakeCasePipe } from '@entropy/pipes';
import { Route } from '@entropy/router';
import { LinkService } from '../links/link.service.ts';

export class DocsController extends Controller {
  private readonly linkService = inject(LinkService);

  @Route.Get('/docs/:section?/:page?', {
    pipes: {
      'page': SnakeCasePipe,
    },
  })
  public async show([section, page]: [string?, string?]) {
    try {
      return await this.render(
        !section || !page
          ? 'pages/docs/index'
          : `pages/docs/${section}/${page}`,
        {
          pageTitle: 'Docs',
          navigationLinks: this.linkService.getNavigationLinks(),
        },
      );
    } catch {
      throw new HttpError(HttpStatus.NotFound);
    }
  }
}
