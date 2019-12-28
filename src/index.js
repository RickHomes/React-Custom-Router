import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const CRouter = ({ routes: appRoutes, auth: requireAuth }) => {
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
  return (
    <BrowserRouter>
      <Switch>
        {appRoutes.map(route =>
          route.private ? (
            requireAuth(
              <AppRoute
                exact={route.exact}
                key={route.comp}
                path={route.path ? route.path : null}
                component={route.comp}
                layout={route.layout}
              />
            )
          ) : (
            <AppRoute
              exact={route.exact}
              key={route.comp}
              path={route.path ? route.path : null}
              component={route.comp}
              layout={route.layout}
            />
          )
        )}
      </Switch>
    </BrowserRouter>
  );
};
export default CRouter;
