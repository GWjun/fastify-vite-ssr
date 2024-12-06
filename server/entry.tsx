import {
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../src/App'

export const render = async (
  url: string,
  options: RenderToPipeableStreamOptions
) => {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    options
  )

  return { stream }
}
