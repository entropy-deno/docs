import { createServer } from '@entropy/server';
import { RootModule } from './root.module.ts';
import { DocsModule } from './docs/docs.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      contentSecurityPolicy: {
        allowedOrigins: [
          'https://fonts.googleapis.com',
          'https://*.clarity.ms',
        ],
      },
      seo: {
        robots: true,
        sitemap: true,
      },
    },
    modules: [
      RootModule,
      DocsModule,
    ],
  });

  await server.start();
}
