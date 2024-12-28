# Vite SSR Boilerplate with Fastify

This repository provides a boilerplate for building server-side rendered (SSR) applications using **Vite** and **Fastify**.

</br>

## Installation

Clone the repository and install the dependencies:

```bash
pnpm install
```

</br>

## Run

- **Development:**

  ```bash
  pnpm dev
  ```

  Starts the development server using vite-node.

- **Production Build:**

  ```bash
  pnpm build
  ```

  Generates the client and server builds for production.

- **Start Production Server:**

  ```bash
  pnpm start
  ```

  Builds the application and starts the server in production mode.

</br>

## Structure

```
├── dist/                # Production build output
├── src/                 # React application source files
│   └── main.tsx         # Client-side entry point
└── server/              # Fastify server code
    ├── entry.tsx        # Server-side entry point for SSR render
    ├── main.ts          # Main server file
    └── util.ts          # Utility function file

```

</br>

## Reference

- https://vite.dev/guide/ssr
- https://reactrouter.com/start/framework/custom
