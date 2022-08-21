export const IntroductionExample = `import React, { Component } from "react";
import DynamicNavbar from "mui-dynamic-nav";
const navbarData = [
  { title: "Home", href: "/", icon: "dashboard" }
]
class App extends Component {
  render() {
    return (
      <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <DynamicNavbar
            title={"TITLE"}
            data={navbarData}
            type="hoverable"
          ></DynamicNavbar>
      </div>
    )
}`;

export const TypeExample = `/*Displays navbar icons without drawer. If there is more than 7 entries in navbarData,
the navbar will be switched to a drawer. Will switch to drawer when screen size is less than 600px*/
<DynamicNavbar
  title={" "}
  data={navbarData}
  type="hoverable"
></DynamicNavbar>
/*Displays navbar icons in a drawer which can be opened with the icon on the left hand corner.*/
<DynamicNavbar
  title={" "}
  data={navbarData}
  type="drawer"
></DynamicNavbar>`;

export const DataExample = `// Without collapsible features in the drawer
const navConfig1 = [
  { title: "someTitle",
  href: "/someLocation",
  // Icon uses material library from google
  icon: "list" },
  {...}
]
// With collapsible features in the drawer
const navConfig2 = [
  // Not possible to make expandable list reference a link
  { title: "someTitle",
  Pages: [{
  title: "expanded title",
  href: "/someLocation",
  // Icon uses material library from google
  icon: "list" },
  {...}]},
  {...}
]
...
<DynamicNavbar
  title={" "}
  data={navConfig1}
  type="hoverable"
></DynamicNavbar>`;

export const SimpleMenuExample = `const someFunction = () => {
  console.log("some");
}
const simpleMenuConfig = [
  {title: "someTitle",
  function: someFunction,
  // Icon uses material library from google
  icon: "list" },
  {...}
]
...
<DynamicNavbar
  title={" "}
  data={navConfig}
  type="hoverable"
  simpleMenu={simpleMenuConfig}
></DynamicNavbar>`;

export const AdditionalButtonsExample = `const someFunction = () => {
  console.log("some");
}
const additionalButtonsConfig = [{
  /* Set property iconButton to false or don't include in config to use normal button */
  iconButton: true,
  function: someFunction,
  title: "someTitle",
  icon: true }, 
  {...}
]
...
<DynamicNavbar
  title={" "}
  data={navConfig}
  type="hoverable"
  additionalButtons={additionalButtonsConfig}
></DynamicNavbar>`;

export const NavbarExampleFirst = `const additionalButtonsConfig = [{
  iconButton: true,
  function: props.logoutUser,
  title: 'exit_to_app',
  icon: true }
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#add3e6',
      contrastText: '#838383'
    },
    secondary: {
      main: '#c1e1ec'
    },
    background: {
      paper: '#c1e1ec'
    },
    text: {
      primary: '#838383'
    }
  },
  overrides: {
    MuiIcon: {
      colorPrimary: {
        color: '#838383'
      }
    }
  }
});

return (
  <div>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={theme}>
  <DynamicNavbar
    title={elephantLogo}
    data={navbarData}
    type="drawer"
    additionalButtons={additionalButtonsConfig}
    theme={theme}
  ></DynamicNavbar>
  </ThemeProvider>
  </div>
  );`;
export const NavbarExampleSecond = `return (
  <div>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={theme}>
  <DynamicNavbar
    title={elephantLogo}
    data={navbarData}
    type="hoverable"
    additionalButtons={additionalButtonsConfig}
    theme={theme}
  ></DynamicNavbar>
  </ThemeProvider>
  </div>
  );`;

export const NavbarExampleThird = `const navTheme = createMuiTheme({
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

return (
  <div>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={navTheme}>
  <DynamicNavbar
    title={""}
    data={navbarData}
    type="hoverable"
    additionalButtons={additionalButtonsConfig}
    theme={theme}
  ></DynamicNavbar>
  </ThemeProvider>
  </div>
  );`;
