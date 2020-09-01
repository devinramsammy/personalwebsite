import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage";
import AboutMe from "./components/about-me";
import Resume from "./components/resume";
import MuiDynamicNav from "./docs/mui-dynamic-nav/container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { StyledProvider, BackToTop } from "components-extra";
import DynamicNavbar from "mui-dynamic-nav";

import "./App.css";

const navTheme = createMuiTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#838383"
    },
    secondary: {
      main: "#ffffff"
    },
    background: {
      paper: "#ffffff"
    },
    text: {
      primary: "#838383"
    }
  },
  overrides: {
    MuiIcon: {
      colorPrimary: {
        color: "#838383"
      }
    }
  }
});

const docsTheme = createMuiTheme({
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "darkgray",
          color: "white",
          "&:hover": {
            backgroundColor: "gray"
          }
        }
      },
      button: {
        "&:hover": {
          backgroundColor: "gray",
          color: "white"
        }
      }
    }
  }
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
        icon: "map"
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <StyledProvider>
        <BackToTop size="small" />
        <ThemeProvider>
          <Router>
            <ThemeProvider theme={navTheme}>
              <DynamicNavbar
                title={""}
                data={navbarData}
                type="hoverable"
              ></DynamicNavbar>
            </ThemeProvider>
            <div className="App">
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
                </ThemeProvider>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </StyledProvider>
    );
  }
}

export default App;
