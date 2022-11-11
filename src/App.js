import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Assigned from "./views/Assigned";
import Home from "./views/Home";
import Incidents from "./views/Incidents";
import KbArticle from "./views/KbArticle";
import KBList from "./views/KBList";
import Login from "./views/Login";
import Ticket from "./views/Ticket";
import NotFound from "./views/NotFound";


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
          <Route path="/assigned">
            <Assigned />
          </Route>
          <Route path="/knowledgebasearticles">
            <KBList />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div >
    </Router>

  );
}

export default App;
