import { useContext } from "react";
import "./styles/main.scss";

//components
import Home from "./views/Home";
import Room from "./views/Room";
import Dialog from "./components/Dialog";

// context
import { DialogContext } from "./context/dialog";

// router
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


function App() {
  const { dialogState } = useContext(DialogContext);

  return (
    <div className="App">
      <Router>
        <Switch>
        <Redirect from="/hotel-booking" to="/" />
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Room} />
        </Switch>
      </Router>
      {dialogState.state && <Dialog dialogState={dialogState} />}
    </div>
  );
}

export default App;
