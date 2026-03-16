# UI App

React 19 + Webpack application with Tailwind CSS, ShadCN UI, and the Roboto font.

## Adding ShadCN Components

To add a new ShadCN component, run from the workspace root:

```bash
npx shadcn@latest add <component> --cwd apps/ui --yes
```

For example:

```bash
npx shadcn@latest add card --cwd apps/ui --yes
npx shadcn@latest add button --cwd apps/ui --yes
```

Components are generated in `src/components/ui/`. Import them using the `@/` alias:

```tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
```

Browse available components at https://ui.shadcn.com/docs/components.

## Development

```bash
npm exec nx serve ui
```

## Build

```bash
npm exec nx build ui
```
