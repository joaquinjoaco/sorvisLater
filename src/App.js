import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/Sidebar";
import Home from "./views/Home";
import Incidents from "./views/Incidents";
import KbArticle from "./views/KbArticle";
import Login from "./views/Login";
import Ticket from "./views/Ticket";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/ticket">
            <Ticket />
          </Route>
          <Route path="/kbarticle">
            <KbArticle />
          </Route>
          <Route path="/incidents">
            <Incidents />
          </Route>
        </Switch>
      </div >
    </Router>

  );
}

export default App;
