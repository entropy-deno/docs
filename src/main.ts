import { Configurator } from '@entropy/configurator';
import { createServer } from '@entropy/server';
import { inject } from '@entropy/injector';

import { RootModule } from './root.module.ts';
import { BadgeModule } from './badges/badge.module.ts';

if (import.meta.main) {
  const configurator = inject(Configurator);

  const server = createServer({
    config: {
      contentSecurityPolicy: {
        allowedOrigins: [
          'https://fonts.googleapis.com',
          'https://*.clarity.ms',
        ],
      },
      host: configurator.entries.isProduction ? 'entropy.deno.dev' : 'localhost',
    },
    modules: [
      RootModule,
      BadgeModule,
    ],
  });

  await server.start();
}
