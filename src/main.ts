import { createServer } from '@entropy';
import { RootModule } from './root.module.ts';
import { BadgeModule } from './badges/badge.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      cspAllowedOrigins: [
        'https://www.clarity.ms',
        'https://s.clarity.ms',
      ],
      envFile: false,
    },
    modules: [
      RootModule,
      BadgeModule,
    ],
  });

  await server.start();
}
