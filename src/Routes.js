import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//pages
import MainPage from "./pages/homepage";
import ErrorPage from "./pages/errorpage";
import StudentIDPage from "./pages/studentid";
import TestimonialsPage from "./pages/testimonials";
import PlagiarismPage from "./pages/plagarisim";
import KeyDatesPage from "./pages/keydates";
import uniAccountsPage from "./pages/uniAccounts";
import checklistPage from "./pages/checklist";
import mapGuide from "./pages/mapPage";
import preview from "./pages/sempreview";

export default function Routes() {
  return (
    <main className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/homepage" component={MainPage} />
          <Route exact path="/studentid" component={StudentIDPage} />
          <Route exact path="/errorpage" component={ErrorPage} />
          <Route exact path="/testimonials" component={TestimonialsPage} />
          <Route exact path="/plagarism" component={PlagiarismPage} />
          <Route exact path="/keydates" component={KeyDatesPage} />
          <Route exact path="/uniAccounts" component={uniAccountsPage} />
          <Route exact path="/checklist" component={checklistPage} />
          <Route exact path="/map" component={mapGuide} />
          <Route exact path="/sempreview" component={preview} />
          <Redirect to="/errorpage" />
        </Switch>
      </Router>
    </main>
  );
}
