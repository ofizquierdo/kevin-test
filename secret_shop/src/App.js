import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { GlobalStyle } from "./globalStyles";
import HomePage from "./pages";
import InfoProduct from "./pages/InfoProduct";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <ToastProvider autoDismissTimeout="3000" placement="top-center">
          <Route path="/" render={() => <HomePage />} exact />
          <Route path="/product" render={() => <InfoProduct />} exact />
        </ToastProvider>
      </Switch>
    </Router>
  );
}

export default App;
