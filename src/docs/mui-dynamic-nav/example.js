import React from "react";
import Navbar1 from "../../assets/Navbar1.PNG";
import Navbar2 from "../../assets/Navbar2.PNG";
import Navbar3 from "../../assets/Navbar3.PNG";
import { Paper } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const NAVBAR1 = `const additionalButtonsConfig = [{
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
const NAVBAR2 = `return (
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

const NAVBAR3 = `const navTheme = createMuiTheme({
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

export default function DynamicNavExample() {
  return (
    <Fade>
      <Paper>
        <div
          style={{
            fontFamily: "Rajdhani",
            fontWeight: "800",
            paddingTop: "1px",
          }}
        >
          <h1>Mui Dynamic Nav Examples</h1>
          <div
            style={{ fontSize: "14pt", marginLeft: "10%", marginRight: "10%" }}
          >
            <p>
              Below will show off multiple ways that this navbar can be styled
              for your project needs. If you want to use the ThemeProvider
              module from Material-UI, please wrap your project code with a
              default ThemeProvider theme.
            </p>
          </div>
          <img height="auto" width="90%" src={Navbar1} alt="Example 1" />
          <div style={{ textAlign: "left" }}>
            <SyntaxHighlighter
              language="javascript"
              style={solarizedLight}
              showLineNumbers
              wrapLines
            >
              {NAVBAR1}
            </SyntaxHighlighter>
          </div>
          <img height="auto" width="90%" src={Navbar2} alt="Example 2" />
          <div style={{ textAlign: "left" }}>
            <SyntaxHighlighter
              language="javascript"
              style={solarizedLight}
              showLineNumbers
              wrapLines
            >
              {NAVBAR2}
            </SyntaxHighlighter>
          </div>
          <img height="auto" width="90%" src={Navbar3} alt="Example 3" />
          <div style={{ textAlign: "left" }}>
            <SyntaxHighlighter
              language="javascript"
              style={solarizedLight}
              showLineNumbers
              wrapLines
            >
              {NAVBAR3}
            </SyntaxHighlighter>
          </div>
          <br></br>
        </div>
      </Paper>
    </Fade>
  );
}
