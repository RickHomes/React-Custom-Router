import React from "react";
import { Route, Switch } from "react-router-dom";

const CRouter = ({ routes: appRoutes }) => {
  const AppRoute = ({
    component: Component,
    layout: Layout,
    layoutProps,
    ...rest
  }) => (
    <Route
      {...rest}
      render={props => (
        <Layout {...layoutProps}>
          <Component />
        </Layout>
      )}
    />
  );
  return (
    <Switch>
      {appRoutes.map(route => (
        <AppRoute
          exact={route.exact}
          key={route.comp}
          path={route.path ? route.path : null}
          component={route.comp}
          layout={route.layout}
          layoutProps={route.layoutProps}
        />
      ))}
    </Switch>
  );
};
export default CRouter;
