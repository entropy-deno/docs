async function serveHttp(connection: Deno.Conn) {
  const httpConnection = Deno.serveHttp(connection);

  for await (const { request, respondWith } of httpConnection) {
    respondWith(new Response('Coming soon...'));
  }
}

if (import.meta.main) {
  const listener = Deno.listen({
    hostname: 'localhost',
    port: 5050,
  });

  for await (const connection of listener) {
    serveHttp(connection);
  }
}
