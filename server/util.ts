import type { ViteDevServer } from 'vite'
import fs from 'fs/promises'

const isProduction = process.env.NODE_ENV === 'production'

export async function loadTemplate(url: string, vite?: ViteDevServer) {
  if (!isProduction) {
    if (!vite) {
      throw new Error('Vite instance is required in development mode')
    }

    const template = await fs.readFile('./index.html', 'utf-8')
    return await vite.transformIndexHtml(url, template)
  }

  // for production
  return await fs.readFile('./dist/client/index.html', 'utf-8')
}

export async function loadRender(vite?: ViteDevServer) {
  if (!isProduction) {
    if (!vite) {
      throw new Error('Vite instance is required in development mode')
    }

    const { render } = await vite.ssrLoadModule('./server/entry.tsx')
    return render
  }

  // for production
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { render } = await import('../dist/server/entry.js')
  return render
}
