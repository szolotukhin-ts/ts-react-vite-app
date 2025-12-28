# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Tutorial URLs
https://medium.com/@robinviktorsson/complete-guide-to-setting-up-react-with-typescript-and-vite-2025-468f6556aaf2

## WebStorm
https://www.jetbrains.com/help/webstorm/starting-the-debugger-session.html

## npm package manager
https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager

## others
https://github.com/merin83/react-without-build-tools-example/tree/master

## questions

vite
---
rewrite imports
module resolution
minify
uglify

esbuild
---
[esbuild] is an extremely fast, open-source module bundler and minifier for JavaScript and CSS
It bundles various code modules ([ES modules] and [CommonJS]) into optimized static files for deployment
Tree Shaking: esbuild can automatically remove unused code ([tree shaking]) from ES6 modules, resulting in smaller, more efficient bundles.
Development Features: It includes features beneficial for development, such as a local [development server], 
[watch mode] for automatic rebuilds on file changes, and source map generation.

https://dev.to/marcinwosinek/esbuild-in-a-simple-html-js-usecase-h1d
https://github.com/marcin-wosinek/js-html-comparison-esbuild/tree/main

tsc
npx
babel
jsx vs tsx vs js - compile jsx to js ?
rollup
HMR  - hot module replacement
native ES modules

JSX transform
automatic JSX runtime
https://javascript.plainenglish.io/how-react-uses-jsx-5bc989ebc674

react
---

## state
- useState - rerender when state change
- useContext - drilling down props problem
- useRef - not rerender
- useReducer - like redux
https://legacy.reactjs.org/docs/hooks-state.html
https://www.youtube.com/@Codevolution/videos

[book] Just React. Learn React the React Way - Hari Narayn 2022.pdf -> State in React

- custom hook - reusable logic
- useEffect - event listener of component mounting/unmounting , state change, after render

## performance
memo
useMemo
useCallback

## CSS
https://www.geeksforgeeks.org/css/how-to-setup-tailwind-css-with-vite/
https://www.yourteaminindia.com/tech-insights/guide-to-using-tailwind-css-with-react
https://dev.to/syedahmedullah14/building-a-modern-website-with-react-tailwind-css-and-vite-4o21
https://medium.com/@akhshyganesh/the-right-way-to-setup-react-and-tailwind-css-with-vite-ae5027f57dda

## REST API with Node.js and TypeScript
https://medium.com/@holasoymalva/how-to-build-a-rest-api-with-node-js-and-typescript-3491ddd19f95

## MongoDB and Mongoose in TypeScript
https://medium.com/@rosarioborgesi/getting-started-with-mongodb-and-mongoose-in-typescript-3c5951c9ea7a
https://www.geeksforgeeks.org/mongodb/how-to-seed-a-mongodb-database-using-docker-compose/
https://www.geeksforgeeks.org/mongodb/mongodb-backup-and-restoration/

## TODO
-> fetch
- axios
- route
- async/await
- modules
- StrictMode

## hooks - todo

useImperativeHandle,
useLayoutEffect,
useDebugValue,



