import React, { useState, createContext } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes.js";
import Header from "./Header";
import firebaseConfig from "./firebase.config";
import * as firebase from "firebase"

firebase.initializeApp(firebaseConfig);

export const AuthContext = createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        Is logged in? {JSON.stringify(isLoggedIn)}
        <div className="App">
          <Router>
            <Header />

            <Switch>
              {routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Switch>
          </Router>
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;