## Getting Started

First, install dev dependencies and run the development server:

```bash
npm install
# run dev server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Tech stack: NextJS, Typescript and TailwindCSS.

I used `Alchemy sdk` to fetch nfts from `OpenSea`. All private keys are stored as environment variables.

## Add ENV variables
Create a .env.local file and add:
`NEXT_PUBLIC_API_KEY`: your alchemy api key
- Contract Address
`NEXT_PUBLIC_ADDRESS: 0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33`

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
