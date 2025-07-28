# light-ts-init

[![npm version][version-image]][npm-url]
[![npm downloads][downloads-image]][npm-url]

A package that initializes a general-purpose TS project with devtools installed. Feature list:

- Formatting (prettier)
- Tests (vitest)
- Pre-commit hook (husky/lint-staged) 
- Aliasing

Feel free to submit a PR to add or modify templates.

## Getting started

1. Install light-ts-init

```sh
npm i -g light-ts-init
```

2. Run the script

```sh
npx light-ts-init <project-name>
```

This will automatically add the necessary depedencies and initialize Git.

[version-image]: https://img.shields.io/npm/v/light-ts-init.svg?style=flat
[downloads-image]: https://img.shields.io/npm/dt/light-ts-init.svg?style=flat
[npm-url]: https://www.npmjs.com/package/light-ts-init
