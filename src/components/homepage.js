import React from "react";
import { Zoom } from "react-reveal";
import "react-typist/dist/Typist.css";
import ParticlesBg from "particles-bg";
import Typist from "react-typist";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "calc(100vh - 90px)",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Homepage() {
  const classes = useStyles();
  function heading(first, second) {
    return (
      <h1>
        <Zoom left cascade duration={1500} delay={300} ssrReveal>
          <div style={{ display: "inline-block", fontFamily: "Rajdhani" }}>
            {first}
          </div>
        </Zoom>
        <span style={{ whiteSpace: "pre" }}> </span>
        <Zoom right cascade duration={1500} delay={300} ssrReveal>
          <div style={{ display: "inline-block", fontFamily: "Rajdhani" }}>
            {second}
          </div>
        </Zoom>
      </h1>
    );
  }

  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Devin Ramsammy's portfolio website" />
      </Helmet>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <ParticlesBg type="cobweb" num={45} bg={true} />
          <Typist
            startDelay={500}
            avgTypingDelay={150}
            className="header"
            cursor={{ show: false }}
          >
            HELLO!
          </Typist>
          <div>{heading("My name is Devin", "and I code and stuff")}</div>
        </Container>
      </main>
    </>
  );
}

export default Homepage;
