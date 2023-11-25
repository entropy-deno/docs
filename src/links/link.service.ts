export class LinkService {
  public getNavigationLinks() {
    return {
      essentials: [
        ['', 'Getting Started'],
        ['/essentials/overview', 'Overview'],
        ['/essentials/configuration', 'Configuration'],
        ['/essentials/modules', 'Modules'],
        ['/essentials/controllers-and-routes', 'Controllers and Routes'],
        ['/essentials/requests', 'Requests'],
        ['/essentials/views', 'Views'],
        ['/essentials/dependency-injection', 'Dependency Injection'],
        ['/essentials/session', 'Session'],
        ['/essentials/middleware', 'Middleware'],
      ],
      advanced: [
        ['/advanced/http-client', 'HTTP Client'],
        ['/advanced/localization', 'Localization'],
        ['/advanced/csrf-protection', 'CSRF Protection'],
        ['/advanced/testing', 'Testing'],
      ],
    };
  }
}
