import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import RoomList from "../../components/RoomList";
import Information from "../../components/Information";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RoomList}/>
        <Route path="/:id" component={Information}/>
      </Switch>

      
    </Router>
  );
}
