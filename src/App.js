import React, { Component } from "react";
import "./App.css";
import "./Routes";
import Head from "./components/Head";
import Routes from "./Routes";
import NavMenu from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Head/>
        <NavMenu />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
//<Route exact path="/directory" component={DirectoryPage} />
//<Route exact path="/map" component={MapPage} />
//
 