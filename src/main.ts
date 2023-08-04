import { createServer } from '@entropy/server';
import { RootModule } from './root.module.ts';
import { BadgeModule } from './badges/badge.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      contentSecurityPolicy: {
        allowedOrigins: [
          'https://fonts.googleapis.com',
          'https://*.clarity.ms',
        ],
      },
      host: 'entropy.deno.dev',
      webSocket: {
        enabled: false,
      },
    },
    modules: [
      RootModule,
      BadgeModule,
    ],
  });

  await server.start();
}
