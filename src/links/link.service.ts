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
        ['/essentials/forms', 'Forms'],
        ['/essentials/views', 'Views'],
        ['/essentials/dependency-injection', 'Dependency Injection'],
        ['/essentials/session', 'Session'],
        ['/essentials/middleware', 'Middleware'],
        ['/essentials/cli', 'CLI'],
      ],
      advanced: [
        ['/advanced/http-client', 'HTTP Client'],
        ['/advanced/localization', 'Localization'],
        ['/advanced/websocket', 'WebSocket'],
        ['/advanced/csrf-protection', 'CSRF Protection'],
        ['/advanced/task-scheduling', 'Task Scheduling'],
        ['/advanced/utilities', 'Utilities'],
        ['/advanced/testing', 'Testing'],
      ],
    };
  }
}
