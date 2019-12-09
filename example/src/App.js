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
    path: "/Sermons",
    layout: EmptyLayout
  }
];
