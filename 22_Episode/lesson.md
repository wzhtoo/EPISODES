# Episode 22

1. Snackbar (menu create, lift up)
2. Nextjs - why and its concepts
3. App vs Page router
4. Setting up NextJs with TypeScript (new Github repo)
5. File system based routing and navigation (useRouter, Link)
6. Next: More Nextjs

# Installation

    npx create-next-app@latest
    ? What is your project named? > foodie-pos-batch3
    ? Would you like to use TypeScript? > No / Yes (Yes)
    ? Would you like to use ESLint? > No / Yes (Yes)
    ? Would you like to use TailWind CSS? >  No / Yes (No)
    ? Would you like to use `src/` directory? > No / Yes (Yes)
    ? Would you like to use App Router? (recommended) > No / Yes (No)
    ? Would you like to customize the default import alias (@/*)? > No / Yes (Yes)

# Start running

    npm run dev
    http://localhost:3000

### Page

```ts
<>
  <head>
    <title>Food POS</title>
  </head>
</>
```

### styles

    # globals.css
    # Home.module.css

### important

pages/api/`hello.ts`

## api floder is using backen

- pages/api/menu/`index.tsx` (file system base routing)

```javascript
  import type {NextApiRequest, NextApiResponse} from "next";

  export default function handler(res: NextAppRequest, res: NextApiResponse) {
    const method = req.method:
    if (method === "GET") {
    } else if (method === "POST) {
    }else if (method === "PUT) {
    }else if (method === "DELETE) {
    }
    return res.status(405).send("Invalid method");
  }
```

## Routes

- pages/menu/`index.tsx` (file system base routing)

- pages/menu-category/`index.tsx` (file system base routing)
