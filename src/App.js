import React, { useState, createContext } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from "./components/Header"
import { MapPage } from "./pages/Maps"
import { MainPage } from "./pages/Main"
import { CardPage } from "./pages/Cards"
import routes from "./routes.js"
import firebaseConfig from "./firebase.config"
import * as firebase from "firebase"
import SearchPage from "./pages/Search"
import './App.css'

firebase.initializeApp(firebaseConfig);

export const AuthContext = createContext(null);
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Header />

      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        Is logged in? {JSON.stringify(isLoggedIn)}
        <div className="App">
          <Router>
            <Header />

            <Switch>
            </Switch>
          </Router>
        </div>
      </AuthContext.Provider>
      <Switch>
        {routes.map(route => (
                  <Route
                    path={route.path}
                  />
                ))}
        <Route>
          <Route path={"/map"}>
            <MapPage />
          </Route>
          <Route path={"/cards"}>
            <CardPage />
          </Route>
          <Route path={"/nasa"}>
            <SearchPage />
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