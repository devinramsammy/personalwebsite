import React from "react";
import { Zoom } from "react-reveal";
import { Grid } from "@material-ui/core";

import "react-typist/dist/Typist.css";
import ParticlesBg from "particles-bg";
import Typist from "react-typist";

function Homepage() {
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
    <div
      style={{
        height: "90vh"
      }}
    >
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <ParticlesBg type="cobweb" num={75} bg={true} />

        <Grid item className="test">
          <Typist
            startDelay={500}
            avgTypingDelay={150}
            className="header"
            cursor={{ show: false }}
          >
            HELLO!
          </Typist>
        </Grid>

        <Grid item>
          <div className="subtitle">
            {heading("My name is Devin", "and I code and stuff")}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
