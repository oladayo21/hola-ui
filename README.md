# hola-ui

shadcn-compatible React component registry with Base UI primitives. Dark theme, flat design, muted teal accent.

## Installation

### Prerequisites

- React 18+
- Tailwind CSS v4
- A shadcn-compatible project (run `npx shadcn init` first)

### Install components

```bash
# Install individual components
npx shadcn add https://oladayo21.github.io/hola-ui/r/button.json
npx shadcn add https://oladayo21.github.io/hola-ui/r/input.json
npx shadcn add https://oladayo21.github.io/hola-ui/r/dialog.json

# Components auto-install their dependencies (utils, Base UI, cva)
```

### Install theme (optional)

```bash
npx shadcn add https://oladayo21.github.io/hola-ui/r/theme.json
```

Then import in your CSS:
```css
@import "./styles/hola-theme.css";
```

Or manually add the CSS variables to your `@theme` block (Tailwind v4).

## Available Components

| Component | Base UI | Description |
|-----------|---------|-------------|
| `button` | No | Primary, secondary, ghost, danger variants |
| `input` | Yes | Text input with default/ghost variants |
| `textarea` | Yes | Multiline input |
| `badge` | No | Status indicators (success, warning, danger) |
| `card` | No | Container with Header, Content, Footer |
| `select` | Yes | Dropdown with keyboard navigation |
| `dialog` | Yes | Modal with backdrop blur |
| `menu` | Yes | Dropdown menu |
| `tabs` | Yes | Tab navigation with indicator |
| `table` | No | Data table with semantic elements |

## Theme Setup

Add this to your main CSS file (Tailwind v4):

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Backgrounds */
  --color-bg-primary: #101012;
  --color-bg-secondary: #18181a;
  --color-bg-tertiary: #222225;
  --color-bg-elevated: #2c2c30;

  /* Borders */
  --color-border-subtle: rgba(255, 255, 255, 0.05);
  --color-border-default: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(255, 255, 255, 0.12);

  /* Text */
  --color-text-primary: #eaeaea;
  --color-text-secondary: #9a9a9e;
  --color-text-tertiary: #6a6a70;
  --color-text-muted: #4a4a50;

  /* Accent (muted teal) */
  --color-accent: #5a9a92;
  --color-accent-soft: rgba(90, 154, 146, 0.12);
  --color-accent-hover: #6baba3;
  --color-accent-text: #101012;

  /* Status colors */
  --color-live: #5a9a7c;
  --color-live-soft: rgba(90, 154, 124, 0.12);
  --color-draft: #b89a5a;
  --color-draft-soft: rgba(184, 154, 90, 0.12);

  /* Flat radius */
  --radius-sm: 1px;
  --radius-md: 2px;
  --radius-lg: 2px;
}

body {
  font-family: var(--font-sans);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-size: 13px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
```

### Customizing Colors

To change the accent color, update `--color-accent` and related variables:

```css
/* Example: blue accent */
--color-accent: #5a8ac9;
--color-accent-soft: rgba(90, 138, 201, 0.12);
--color-accent-hover: #6b9bd9;
```

## Usage Examples

### Button

```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>
```

### Dialog

```tsx
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm</DialogTitle>
      <DialogDescription>Are you sure?</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Table

```tsx
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Homepage</TableCell>
      <TableCell><Badge variant="success">Live</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Development

```bash
pnpm install
pnpm build          # Build registry to public/r/
```

Push to main to auto-deploy via GitHub Actions.

## License

MIT
