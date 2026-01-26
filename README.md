# hola-ui

shadcn-compatible React component registry.

## Usage

```bash
npx shadcn add https://oladayo21.github.io/hola-ui/r/button.json
```

## Development

```bash
pnpm install
pnpm build
```

## Adding Components

1. Create component in `registry/default/<name>/<name>.tsx`
2. Add entry to `registry.json`
3. Run `pnpm build`
4. Push to main (auto-deploys via GitHub Actions)
