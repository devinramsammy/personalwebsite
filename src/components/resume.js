import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "react-typist/dist/Typist.css";
import ParticlesBg from "particles-bg";
import resume from "../assets/resume.jpg";
import resumePDF from "../assets/Resume.pdf";
import { Fade } from "react-reveal";

function Resume() {
  return (
    <div styles={{ maxHeight: "100vh" }}>
      <ParticlesBg type="cobweb" bg={true} />
      <Fade>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Paper>
              <a href={resumePDF} download>
                <img
                  className="resume"
                  src={resume}
                  alt="Devin Ramsammy's Resume"
                ></img>
              </a>
            </Paper>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

export default Resume;
