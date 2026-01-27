# hola-ui

shadcn-compatible React component registry. Personal design system served via GitHub Pages.

## Quick Reference

```bash
pnpm build                 # Build registry to public/r/
pnpm install               # Install deps
# Push to main → auto-deploys via GitHub Actions
```

**Registry URL:** https://oladayo21.github.io/hola-ui/r/

## Design System Source

**pss-kitchen-ai is the reference implementation.** All components should match its look and feel.

| Reference | Location |
|-----------|----------|
| Theme/CSS | `~/code/work/pss-kitchen-ai/src/app.css` |
| Components | `~/code/work/pss-kitchen-ai/src/lib/components/` |

### Theme Characteristics

- **Dark mode only** (for now)
- **Flat design** - 1-2px border radius
- **Muted teal accent** - `#5a9a92`
- **Geist font** - 13px body
- **Subtle borders** - `rgba(255, 255, 255, 0.08)`

### CSS Variables (Tailwind v4 @theme)

```css
--color-bg-primary: #101012;
--color-bg-secondary: #18181a;
--color-bg-tertiary: #222225;
--color-bg-elevated: #2c2c30;

--color-text-primary: #eaeaea;
--color-text-secondary: #9a9a9e;
--color-text-tertiary: #6a6a70;

--color-accent: #5a9a92;
--color-accent-hover: #6baba3;
--color-accent-text: #101012;

--color-border-default: rgba(255, 255, 255, 0.08);
--color-border-hover: rgba(255, 255, 255, 0.12);
```

## Component Patterns

### Always use cva + cn

```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "base classes here",
  {
    variants: {
      variant: {
        primary: "...",
        secondary: "...",
      },
      size: {
        sm: "...",
        md: "...",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

export { Button, buttonVariants }
```

### Export both component and variants

Always export `buttonVariants`, `inputVariants`, etc. so consumers can use them for other elements (e.g., link styled as button).

### Use theme CSS variables in Tailwind classes

```tsx
// Good - uses CSS variables, theme-able
"bg-accent text-accent-text hover:bg-accent-hover"
"bg-bg-tertiary border-border-default"

// Avoid - hardcoded colors
"bg-teal-600 text-white"
```

## Registry Structure

```
registry/
└── default/
    ├── utils/
    │   └── cn.ts              # cn helper (clsx + tailwind-merge)
    ├── theme/
    │   └── theme.css          # CSS variables + base styles
    └── button/
        └── button.tsx         # Component
```

## Adding Components

1. Create `registry/default/<name>/<name>.tsx`
2. Follow cva + cn pattern above
3. Add to `registry.json`:

```json
{
  "name": "input",
  "type": "registry:ui",
  "title": "Input",
  "description": "Text input with variants.",
  "dependencies": ["class-variance-authority"],
  "registryDependencies": ["utils"],
  "files": [
    {
      "path": "registry/default/input/input.tsx",
      "type": "registry:ui"
    }
  ]
}
```

4. Run `pnpm build`
5. Push to main

## Dependencies

| Package | Purpose |
|---------|---------|
| `@base-ui-components/react` | Unstyled primitives (Input, Dialog, Menu, etc.) |
| `class-variance-authority` | Variant management |
| `clsx` | Conditional classes |
| `tailwind-merge` | Override conflicting Tailwind classes |

## Base UI Usage

**All components MUST use Base UI primitives where applicable.**

```tsx
import { Input } from "@base-ui-components/react/input"
import { Dialog } from "@base-ui-components/react/dialog"
import { Menu } from "@base-ui-components/react/menu"
```

Base UI provides accessibility and behavior - we add styling via cva + Tailwind.

## Consumer Usage

Add registry to `components.json`:

```json
{
  "registries": {
    "hola": {
      "url": "https://oladayo21.github.io/hola-ui/r"
    }
  }
}
```

Then install components:

```bash
npx shadcn add hola/button
npx shadcn add hola/theme
```

Consumer must have Tailwind v4 with matching CSS variables defined in their `@theme` block.

## Components (37 total)

| Component | Base UI | Notes |
|-----------|---------|-------|
| Alert | No | Inline alerts with variants |
| AlertDialog | Yes | Confirmation modals |
| Avatar | No | Image with fallback |
| Badge | No | Status indicators |
| Breadcrumb | No | Navigation breadcrumbs |
| Button | No | Primary, secondary, ghost, danger |
| Card | No | Content containers, compound |
| Checkbox | Yes | Form checkbox with sizes |
| Collapsible | Yes | Expandable sections |
| ContextMenu | Yes | Right-click menus |
| Dialog | Yes | Modals, confirmations |
| DropdownMenu | Yes | Dropdown menus |
| Input | Yes | Text input with variants |
| InputOTP | No | OTP/verification (input-otp lib) |
| Label | No | Form labels |
| Menu | Yes | Generic dropdown menu |
| NavigationMenu | Yes | Site navigation |
| Popover | Yes | Floating panels |
| Progress | Yes | Progress bars |
| ScrollArea | Yes | Custom scrollbars |
| Select | Yes | Form dropdowns |
| Separator | No | Divider lines |
| Sheet | Yes | Slide-in panels |
| Sidebar | No | App sidebar with context |
| Skeleton | No | Loading placeholders |
| Sonner | No | Toast notifications (sonner lib) |
| Spinner | No | Loading spinners |
| Switch | Yes | Toggle on/off |
| Table | No | Data tables, compound |
| Tabs | Yes | Line/pills/boxed variants |
| Textarea | No | Multiline input |
| Toggle | Yes | Toggle buttons |
| ToggleGroup | Yes | Toggle button groups |
| Tooltip | Yes | Hover hints |
| VisuallyHidden | No | Screen reader text |

## Future Components

| Component | Base UI | Description |
|-----------|---------|-------------|
| Radio | Yes | Radio button groups |
| Slider | Yes | Range input |
| Accordion | Yes | Multi-section collapsible |
| Combobox | Yes | Autocomplete select |

## Notes

- This is React-only (no Svelte version yet)
- Base UI primitives can be used for complex components (Dialog, Menu) but simple components don't need them
- shadcn's "build your own" at ui.shadcn.com/create supports Base UI if needed
