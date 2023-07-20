[![GitHub Super-Linter](https://github.com/just-midemichael/admin-dashboard/actions/workflows/linter.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Get Started

- `yarn` is the package manager on this project, not `npm`, `pnpm` etc
- Pull requests should be scoped to one feature or fix, except for complex features and flows.
- All files created under the `component` folder should start with a capital letter.
- All folders should follow camel casing, no white space is permitted in its naming.
- Functions should follow camel casing e.g `addFiles`, class names should follow pascal casing e.g `AddFiles`
- Commit messages should carry their appropiate flag e.g feat, fix, chore etc. Here is a sample commit command `git commit -m "feat: added input components"`


To install project dependencies

```bash
    yarn or yarn install
```
To start the development server

```bash
yarn dev
```

To auto remove linting errors use

```bash
yarn lint:fix
```