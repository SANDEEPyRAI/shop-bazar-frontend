import React, { Suspense, Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { routes } from "src/routes";
import { createBrowserHistory } from "history";
import AuthContext from "src/context/Auth";
import PageLoading from "src/component/PageLoading";
import AuthGuard from "src/component/AuthGuard";
import { ThemeProvider } from "@material-ui/core";
import toast, { Toaster } from "react-hot-toast";
import { createTheme } from "src/theme";
import SessionLogout from "./SessionLogout";
import { HelmetProvider } from "react-helmet-async";

const history = createBrowserHistory();

function App() {
  const theme = createTheme();
  // console.log(theme);
  return (
    <div className="App">
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <Toaster position="top-right" reverseOrder={false} gutter={8} />
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router history={history}>
              <AuthContext>
                <SessionLogout>
                  <RenderRoutes data={routes} />
                </SessionLogout>
              </AuthContext>
            </Router>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;

function RenderRoutes(props) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {props.data.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard ? AuthGuard : Fragment;
          const Layout = route.layout || Fragment;
          // console.log("Processing route:", route);
          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
