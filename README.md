# React Checkbox

A React checkbox component with a styled indicator and label, with colours set through props.

**Status:** Stub. The package is one component file (`src/index.js`) and one stylesheet, under five source files, with no tests and no app inside `src/` that uses the component.

## The problem

Native checkboxes are hard to restyle consistently. This package wraps a checkbox input in a custom indicator and label, so the colours can be set through props.

## What it does

- Renders an `<input type="checkbox">` with a styled indicator and a label.
- Takes `checkedColor`, `unCheckedColor`, `iconColor` and `labelColor` props for the colours.
- Shows a check mark when `value` is truthy.
- Applies a `style` prop to the indicator and passes any other props, such as `onChange`, to the input.

## How it's built

A React function component compiled with Babel. `babel.config.json` controls the build, and `npm run build` writes the output to `dist/`, copying the stylesheet alongside it. The component imports `styles.css`, so a consuming app's bundler must handle CSS imports.

## Running it locally

```bash
npm install
npm run build
```

The only script is `build`, which removes `dist/` and recompiles `src/` with Babel.

## What's left

- `value` is used as the checked flag and also passed to the input's `value` attribute. A separate `checked` prop would be cleaner.
- The input uses `class` rather than `className`, which React warns about.
- There are no tests, and nothing in `src/` demonstrates the component.
