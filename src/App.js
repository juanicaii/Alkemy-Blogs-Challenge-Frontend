import { Router, Switch, Route, Redirect } from "react-router-dom";
import LayoutComponent from "./components/Layout";
import HomeView from "./views/HomeView";
import DetailsPostView from "./views/DetailsPostView";
import AdminPanelView from "./views/AdminPanelView";
import NewPostView from "./views/NewPostView";
import useCurrentPage from "./hooks/useCurrentPage";
import history from "./history";
import config from "./react.config";
import NotFoundView from "./views/NotFoundView";

function App() {
  const page = useCurrentPage(history);
  const server = config.api === "express" ? true : false;

  return (
    <div className="App">
      <LayoutComponent currentPage={page}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route
              exact
              path="/home"
              render={() => <HomeView server={server} />}
            />
            <Route exact path="/post/:id" component={DetailsPostView} />
            <Route exact path="/admin" component={AdminPanelView} />
            <Route exact path="/posts/create" component={NewPostView} />
            <Route path="*">
              <NotFoundView
                text="Sorry, the page you visited does not exist."
                button="Back Home"
              />
            </Route>
          </Switch>
        </Router>
      </LayoutComponent>
    </div>
  );
}

export default App;
