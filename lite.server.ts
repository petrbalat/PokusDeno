import {serve} from 'https://deno.land/std@v0.38.0/http/server.ts';

const port = 8080;
console.log(`http://localhost:${port}`);
for await (const req of serve({port})) {
    console.info(`${req.method} ${req.url}`)
    req.respond({body: 'Hello World\n'});
}
