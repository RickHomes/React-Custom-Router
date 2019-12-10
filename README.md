# c-router

> custom react router-accepts layouts and components

[![NPM](https://img.shields.io/npm/v/c-router.svg)](https://www.npmjs.com/package/c-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save c-router
```

## Usage

```jsx
// App.js
import React, { Component } from "react";
import CRouter from "c-router";
import { appRoutes } from "./Routes";
class App extends Component {
  render() {
    return <CRouter routes={appRoutes} />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

// Routes.js
import { Home, AboutUs } from "./pages";
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
    comp: AboutUs,
    path: "/AboutUs",
    layout: EmptyLayout
  }
];

//Layouts

// EmptyLayout.js
import React from "react";
import AppBar from "./AppBar";

export default function EmptyLayout({ children }) {
  return (
    <div>
      {/* our content goes in here */}
      {children}
    </div>
  );
}

// DefaultLayout
import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}

// pages/Views

// Home.js

import React from "react";

export default function HomePage() {
  return (
    <div>
      <p>Welcome to CRoute HomePage</p>
    </div>
  );
}
// AboutUs.js

import React from "react";
export default function AboutUs() {
  return (
    <div>
      <p>About us page</p>
    </div>
  );
}
```

## License

MIT © [homericks](https://github.com/homericks)
