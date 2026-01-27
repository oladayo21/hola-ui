# hola-ui

shadcn-compatible React component registry with Base UI primitives. Dark theme, flat design, muted teal accent.

## Installation

### Prerequisites

- React 18+
- Tailwind CSS v4
- A shadcn-compatible project (run `npx shadcn init` first)

### Add registry

Add hola-ui to your `components.json`:

```json
{
  "registries": {
    "hola": {
      "url": "https://oladayo21.github.io/hola-ui/r"
    }
  }
}
```

### Install components

```bash
npx shadcn add hola/button
npx shadcn add hola/input
npx shadcn add hola/dialog

# Install multiple
npx shadcn add hola/button hola/input hola/badge
```

Components auto-install their dependencies (utils, Base UI, cva).

### Install theme

```bash
npx shadcn add hola/theme
```

Then import in your CSS:
```css
@import "./styles/hola-theme.css";
```

## Available Components

| Component | Description |
|-----------|-------------|
| `alert` | Inline alerts with variants |
| `alert-dialog` | Confirmation modals |
| `avatar` | User avatars with fallback |
| `badge` | Status indicators |
| `breadcrumb` | Navigation breadcrumbs |
| `button` | Primary, secondary, ghost, danger |
| `card` | Content container |
| `checkbox` | Form checkbox |
| `collapsible` | Expandable sections |
| `context-menu` | Right-click menus |
| `dialog` | Modal dialogs |
| `dropdown-menu` | Dropdown menus |
| `input` | Text input |
| `input-otp` | OTP/verification codes |
| `label` | Form labels |
| `menu` | Generic menu |
| `navigation-menu` | Site navigation |
| `popover` | Floating panels |
| `progress` | Progress bars |
| `scroll-area` | Custom scrollbars |
| `select` | Dropdowns |
| `separator` | Divider lines |
| `sheet` | Slide-in panels |
| `sidebar` | App sidebar |
| `skeleton` | Loading placeholders |
| `sonner` | Toast notifications |
| `spinner` | Loading spinners |
| `switch` | Toggle switches |
| `table` | Data tables |
| `tabs` | Tab navigation |
| `textarea` | Multiline input |
| `toggle` | Toggle buttons |
| `toggle-group` | Toggle button groups |
| `tooltip` | Hover hints |
| `visually-hidden` | Screen reader text |

## Theme

Uses shadcn-compatible tokens. Add to your CSS (Tailwind v4):

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: 'Geist', system-ui, sans-serif;

  --color-background: #101012;
  --color-foreground: #eaeaea;

  --color-card: #18181a;
  --color-card-foreground: #eaeaea;

  --color-popover: #18181a;
  --color-popover-foreground: #eaeaea;

  --color-primary: #5a9a92;
  --color-primary-foreground: #101012;

  --color-secondary: #222225;
  --color-secondary-foreground: #eaeaea;

  --color-muted: #222225;
  --color-muted-foreground: #9a9a9e;

  --color-accent: #2c2c30;
  --color-accent-foreground: #eaeaea;

  --color-destructive: #dc2626;
  --color-destructive-foreground: #ffffff;

  --color-border: rgba(255, 255, 255, 0.08);
  --color-input: rgba(255, 255, 255, 0.08);
  --color-ring: #5a9a92;

  --radius: 2px;
}

body {
  font-family: var(--font-sans);
  background: var(--color-background);
  color: var(--color-foreground);
  font-size: 13px;
}
```

## Development

```bash
pnpm install
pnpm build    # Build registry to public/r/
```

Push to main to auto-deploy via GitHub Actions.

## License

MIT
