import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Header } from "./components/Header"
import { MapPage } from "./pages/Maps"
import { MainPage } from "./pages/Main"
import { CardPage } from "./pages/Cards"
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Route path={"/map"}>
            <MapPage />
          </Route>
          <Route path={"/cards"}>
            <CardPage />
          </Route>
          <Route path={"/"}>
            <MainPage />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
