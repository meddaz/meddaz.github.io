import "./styles.css";
import "./search.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import about from "./pages/about";
//import works from "./pages/works";
import Home from "./pages/home";

import AllResults from "./pages/allResults";
import NotFound from "./pages/notFound";
import ProjectsPage from "./pages/projectsPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route key="item1" path="/all" component={AllResults} />
          <Route key="item2" path="/about" component={about} />

          <Route key="item3" path="/projects" component={ProjectsPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
