import Home from "./views/Home";
import Room from "./views/Room";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Room} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
