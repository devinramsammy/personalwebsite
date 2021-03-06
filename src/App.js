import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage";
import AboutMe from "./components/about-me";
import Resume from "./components/resume";
import MuiDynamicNav from "./docs/mui-dynamic-nav/container";
import DatabaseAnalytics from "./docs/police-shooting-database-analytics/container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import DynamicNavbar from "mui-dynamic-nav";

import "./App.css";

const navTheme = createMuiTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#838383",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      paper: "#ffffff",
    },
    text: {
      primary: "#838383",
    },
  },
  overrides: {
    MuiIcon: {
      colorPrimary: {
        color: "#838383",
      },
    },
  },
});

const docsTheme = createMuiTheme({
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "darkgray",
          color: "white",
          "&:hover": {
            backgroundColor: "gray",
          },
        },
      },
      button: {
        "&:hover": {
          backgroundColor: "gray",
          color: "white",
        },
      },
    },
  },
});

const navbarData = [
  { title: "Home", href: "/", icon: "dashboard" },
  { title: "About Me", href: "/about-me", icon: "face" },
  { title: "Resume", href: "/resume", icon: "description_icon" },
  {
    title: "Public Projects",
    icon: "account_tree",
    pages: [
      {
        title: "Dynamic Navbar",
        href: "/mui-dynamic-nav",
        icon: "map",
      },
      {
        title: "Police Shootings Database Analytics",
        href: "/police-shootings-analytics",
        icon: "bar_chart",
      },
    ],
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider>
          <Router>
            <ThemeProvider theme={navTheme}>
              <DynamicNavbar
                title={""}
                data={navbarData}
                type="hoverable"
              ></DynamicNavbar>
            </ThemeProvider>

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about-me" component={AboutMe} />
              <Route exact path="/resume" component={Resume} />
              <ThemeProvider theme={docsTheme}>
                <Route
                  exact
                  path="/mui-dynamic-nav"
                  component={MuiDynamicNav}
                />
                <Route
                  exact
                  path="/police-shootings-analytics"
                  component={DatabaseAnalytics}
                />
              </ThemeProvider>
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
