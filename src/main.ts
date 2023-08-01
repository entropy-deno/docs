import { createServer } from '@entropy';
import { RootModule } from './root.module.ts';
import { BadgeModule } from './badges/badge.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      cspAllowedOrigins: [
        'https://fonts.googleapis.com',
        'https://*.clarity.ms',
      ],
    },
    modules: [
      RootModule,
      BadgeModule,
    ],
  });

  await server.start();
}
