import { useContext } from "react";
import Home from "./views/Home";
import Room from "./views/Room";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {DialogContext} from "./context/dialog"
import Dialog from "./components/Dialog";




function App() {
  const { dialogState } = useContext(DialogContext)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Room} />
        </Switch>
      </Router>
      {dialogState.state && (
        <Dialog dialogState={dialogState} />
      )}
    </div>
  );
}

export default App;
