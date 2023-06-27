import { createServer } from '@entropy';
import { AppModule } from './app/app.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      envFile: false,
    },
    modules: [
      AppModule,
    ],
  });

  await server.start();
}
