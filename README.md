# c-router

> custom react router-accepts layouts and components

[![NPM](https://img.shields.io/npm/v/c-router.svg)](https://www.npmjs.com/package/c-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save c-router
```

## Usage

```jsx
import React, { Component } from "react";
import CRouter from "c-router";
class App extends Component {
  render() {
    return <CRouter routes={appRoutes} />;
  }
}

// appRoutes or yourAppRoutes is an array of routes example below:
// import render components
import { Home, AnotherPageComponent } from "./pages";
// import Layouts
import { DefaultLayout, EmptyLayout } from "../layouts";

export const appRoutes = [
  {
    exact: true,
    comp: Home,
    path: "/",
    layout: DefaultLayout
  },
  {
    exact: false,
    comp: AnotherPageComponent,
    path: "/Page2",
    layout: EmptyLayout
  }
];
```

## License

MIT © [homericks](https://github.com/homericks)
