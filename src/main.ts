import { createServer } from '@entropy';
import { AppModule } from './app/app.module.ts';
import { BadgeModule } from './badges/badge.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      envFile: false,
    },
    modules: [
      AppModule,
      BadgeModule,
    ],
  });

  await server.start();
}
