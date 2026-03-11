# Solid State — Angular Conversion

Angular 17 conversion of the **Solid State** HTML5 UP template.

## Project Structure

```
src/
├── index.html                          # Root HTML (references original assets)
├── main.ts                             # Angular bootstrap entry point
└── app/
    ├── app.module.ts                   # Root NgModule
    ├── app.component.ts / .html        # Shell with router-outlet
    ├── app-routing.module.ts           # Route definitions
    ├── components/
    │   ├── header/                     # <app-header> — nav bar
    │   ├── menu/                       # <app-menu> — slide-out nav
    │   └── footer/                     # <app-footer> — contact form + info
    └── pages/
        ├── home/                       # Route: /
        ├── generic/                    # Route: /generic
        └── elements/                   # Route: /elements
```

## Routing

| URL          | Component         | Original file  |
|--------------|-------------------|----------------|
| `/`          | `HomeComponent`   | `index.html`   |
| `/generic`   | `GenericComponent`| `generic.html` |
| `/elements`  | `ElementsComponent`| `elements.html`|

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Copy original assets into `src/`
From your original Solid State template, copy:
```
assets/     →  src/assets/
images/     →  src/assets/images/   (or keep as images/ in src/)
```

> The `index.html` references `assets/css/main.css` and `assets/js/*.js` — these are
> loaded as static files exactly as in the original template. No changes needed to the CSS.

### 3. Serve locally
```bash
npm start
# → http://localhost:4200
```

### 4. Production build
```bash
npm run build
# Output: dist/solid-state/
```

## What Changed vs. Original HTML

| Original                        | Angular                                      |
|---------------------------------|----------------------------------------------|
| `<a href="index.html">`         | `<a routerLink="/">`                         |
| jQuery menu toggle (`#menu`)    | `[class.is-menu-visible]` binding on `<nav>` |
| Inline `<form>` with POST       | `ReactiveFormsModule` with `FormGroup`       |
| Repeated header/footer HTML     | Shared `<app-header>` / `<app-footer>`       |
| Static feature card HTML        | `*ngFor` over typed data arrays              |
| Pagination static HTML          | `*ngFor` + `[class.active]` binding          |

## Notes

- **CSS/JS unchanged**: The original `main.css` and jQuery scripts are referenced
  from `src/index.html` unchanged. Angular handles routing; the original JS handles
  scroll effects, menu animations, and responsive breakpoints.
- **Menu visibility**: The `is-menu-visible` class (used by the original `main.js`)
  is toggled via Angular binding. Ensure `main.js` does not conflict — if it does,
  remove the jQuery menu toggle from `main.js` and rely solely on the Angular binding.
- **Images**: Place images under `src/assets/images/` and update `[src]` bindings
  in components if you change the path.
