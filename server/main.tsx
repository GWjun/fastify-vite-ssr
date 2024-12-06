import Fastify from 'fastify'
import { createServer } from 'vite'
import fs from 'fs/promises'

const server = Fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
})
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

server.addHook('onRequest', (req, res, done) => {
  vite.middlewares(req.raw, res.raw, done)
})

server.get('*', async (req, reply) => {
  const url = req.url
  const res = reply.raw

  let template = await fs.readFile('./index.html', 'utf-8')
  template = await vite.transformIndexHtml(url, template)

  const { render } = await vite.ssrLoadModule('./server/entry.tsx')
  const parts = template.split('<!--ssr-outlet-->')
  res.write(parts[0])

  const { stream } = await render(url, {
    onShellReady() {
      stream.pipe(res)
    },
    onAllReady() {
      res.write(parts[1])
      res.end()
    },
  })
})

await server.ready()
await server.listen({ port: 3000 })
