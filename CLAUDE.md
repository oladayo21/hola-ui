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

```bash
# Install button (auto-installs utils + deps)
npx shadcn add https://oladayo21.github.io/hola-ui/r/button.json

# Install theme CSS
npx shadcn add https://oladayo21.github.io/hola-ui/r/theme.json
```

Consumer must have Tailwind v4 with matching CSS variables defined in their `@theme` block.

## Components

| Component | Status | Base UI | Notes |
|-----------|--------|---------|-------|
| Button | Done | No | Native button, cva variants |
| Input | Done | Yes | Text input with variants |
| Badge | Done | No | Status indicators (live/draft) |
| Textarea | Done | Yes | AI chat, content editing |
| Select | Done | Yes | Form dropdowns |
| Card | Done | No | Content containers, compound |
| Dialog | Done | Yes | Modals, confirmations |
| Menu | Done | Yes | Dropdown actions |
| Tabs | Done | Yes | Section switching |
| Table | Done | No | Data tables, compound |
| Tooltip | Done | Yes | Hover hints |
| Popover | Done | Yes | Floating panels |

## Future Components

| Component | Base UI | Priority | Description |
|-----------|---------|----------|-------------|
| Switch | Yes | High | Toggle on/off |
| Checkbox | Yes | Medium | Form checkbox with label |
| Radio | Yes | Medium | Radio button groups |
| Avatar | No | Medium | User avatars with fallback |
| Separator | No | Low | Horizontal/vertical dividers |
| Skeleton | No | Low | Loading placeholders |
| Toast | Yes | Low | Notifications (requires provider) |
| Accordion | Yes | Low | Collapsible sections |
| Alert | No | Low | Inline alerts/callouts |
| Progress | Yes | Low | Progress bars |
| Slider | Yes | Low | Range input |
| Combobox | Yes | Low | Autocomplete/searchable select |

### Implementation Notes

**Switch** - Use `@base-ui-components/react/switch`. Binary toggle, style as pill shape.

**Checkbox/Radio** - Use Base UI primitives. Include proper label association.

**Toast** - Use `@base-ui-components/react/toast`. Requires ToastProvider at app root.

**Avatar** - No Base UI needed. Image with initials fallback.

**Skeleton** - No Base UI needed. Animated placeholder divs.

## Notes

- This is React-only (no Svelte version yet)
- Base UI primitives can be used for complex components (Dialog, Menu) but simple components don't need them
- shadcn's "build your own" at ui.shadcn.com/create supports Base UI if needed
