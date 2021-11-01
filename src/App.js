import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Articles from "./components/Articles";
import Blogs from "./components/Blogs";
import Report from "./components/Report";
import FullDetail from "./components/FullDetail";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Articles />
            </Route>
            <Route path="/blogs">
              <Navbar />
              <Blogs />
            </Route>
            <Route path="/reports">
              <Navbar />
              <Report />
            </Route>
            <Route path="/articles/:id">
              <FullDetail />
            </Route>
            <Route path="/blogs/:id">
              <FullDetail />
            </Route>
            <Route path="/reports/:id">
              <FullDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
