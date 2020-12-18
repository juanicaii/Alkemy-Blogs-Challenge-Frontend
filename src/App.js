import { Router, Switch, Route, Redirect } from "react-router-dom";
import LayoutComponent from "./components/Layout";
import HomeView from "./views/HomeView";
import DetailsPostView from "./views/DetailsPostView";
import AdminPanelView from "./views/AdminPanelView";

import history from "./history";

import NotFoundView from "./views/NotFoundView";

function App() {
  return (
    <LayoutComponent currentPage={"home"}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomeView} />
            <Route exact path="/post/:id" component={DetailsPostView} />
            <Route exact path="/admin" component={AdminPanelView} />
            <Route path="*">
              <NotFoundView />
            </Route>
          </Switch>
        </Router>
      </div>
    </LayoutComponent>
  );
}

export default App;
