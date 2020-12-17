import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import HomeView from "./views/HomeView";
import DetailsPostView from "./views/DetailsPostView";
import NotFoundView from "./views/NotFoundView";

function App() {
  return (
    <Layout>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomeView} />
            <Route exact path="/post/:id" component={DetailsPostView} />
            <Route path="*">
              <NotFoundView />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
