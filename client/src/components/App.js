import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import BmiCal from "./views/Pagecontents/Bmi/BmiCal.js";
import Nutrients from "./views/Pagecontents/Nutrients/Nutrients.js";
import Goodfood from "./views/Pagecontents/Goodfood/Goodfood.js";

import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/bmical" component={Auth(BmiCal, null)}/>
          <Route exact path="/nutrients" component={Auth(Nutrients, null)}/>
          <Route exact path="/goodfood" component={Auth(Goodfood, null)}/>
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
