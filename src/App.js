import React, { useState, useContext } from 'react';
import { Settings } from "./contexts/Settings";
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Extra1 from './components/Extra1';
import Extra2 from './components/Extra2';

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        inside noMatch. No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function App() {

  const { isLightTheme,
    // light,
    // dark,
    lang
    // toggleTheme,
    // toggleLang
  } = useContext(Settings);
  // const theme = isLightTheme ? light : dark;


  const [counterInApp, setCounterInApp] = useState(0);

  const increaseCounter = () => {
    setCounterInApp((counterInApp) => counterInApp + 1);
  }
  const decreaseCounter = () => {
    setCounterInApp(() => counterInApp - 1);
  }

  return (
    <Router>
      <div className="App">
        <span>App</span><br />
        <span>{`Settings: isLightTheme: ${isLightTheme} | lang: ${lang}`}</span><br />
        <span>{`counterInApp: ${counterInApp}`}</span><br />
        <button className="button" onClick={increaseCounter}>increase counterInApp</button>
        <Header decreaseCounter={decreaseCounter} />
        {/* <Main increaseCounter={increaseCounter} /> */}
        <Switch>
          <Route exact path="/" render={() => <Main increaseCounter={increaseCounter} />} />
          <Route path="/Extra1" render={() => <Extra1 increaseCounter={increaseCounter} />} />
          <Route path="/Extra2" render={() => <Extra2 increaseCounter={increaseCounter} />} />
          <Route path="*">
            <NoMatch />
            <Redirect from="/noMatch" to="/" />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// npm i --save-dev serve
// we need a way to run this so we add a script in package.json
// "serve": "serve ./build"
// npm run serve

// npm i json-server
// we need a way to run this so we add a script in package.json
// npm run server
