import React from "react";
import { Route } from "react-router-dom";

const CRouter = ({ routes: appRoutes }) => {
  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
  return appRoutes.map(route => (
    <AppRoute
      exact={route.exact}
      key={route.comp}
      path={route.path ? route.path : null}
      component={route.comp}
      layout={route.layout}
    />
  ));
};
export default CRouter;
