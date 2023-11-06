import { Controller } from '@entropy/http';
import { inject } from '@entropy/injector';
import { Route } from '@entropy/router';
import { LinkService } from './links/link.service.ts';

export class RootController extends Controller {
  private readonly linkService = inject(LinkService);

  @Route.Get('/')
  public async index() {
    return await this.render('pages/home', {
      pageTitle: 'Home',
      navigationLinks: this.linkService.getNavigationLinks(),
    });
  }
}
