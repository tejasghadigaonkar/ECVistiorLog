import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisitorLog from "./pages/VisitorLog";
import AddVisitor from './pages/AddVisitor';
import LatestNews from "./pages/LatestNews";
import Page404 from "./pages/Page404";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/poppins-v9-latin-regular.ttf';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/visitorLog" component={VisitorLog} />
          <Route exact path="/addVisitor" component={AddVisitor} />
          <Route exact path="/LatestNews" component={LatestNews} />
          <Route path="" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    );
}

export default App;
