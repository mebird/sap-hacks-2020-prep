import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from "./components/Header"
import { SimpleMap } from "./pages/Maps"
import { MainPage } from "./pages/Main"
import { CardPage } from "./pages/Cards"
import SearchPage from "./pages/Search"
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Route path={"/map"}>
            <SimpleMap />
          </Route>
          <Route path={"/cards"}>
            <CardPage />
          </Route>
          <Route path={"/nasa"}>
            <SearchPage />
          </Route>
          <Route exact path={"/"}>
            <MainPage />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
