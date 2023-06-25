async function serveHttp(connection: Deno.Conn) {
  const httpConnection = Deno.serveHttp(connection);

  for await (const { request, respondWith } of httpConnection) {
    if (new URL(request.url).pathname === '/') {
      respondWith(
        new Response(
          '<h1>Entropy framework for Deno</h1><p>Coming soon... [currently under development]</p>',
          {
            headers: {
              'content-type': 'text/html; charset=utf-8',
            },
          },
        ),
      );
    }
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
