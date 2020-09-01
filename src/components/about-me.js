import React from "react";
import { Fade } from "react-reveal";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  CardHeader,
  Icon,
  IconButton
} from "@material-ui/core";
import "react-typist/dist/Typist.css";
import ParticlesBg from "particles-bg";
import ProfilePic from "../assets/placeholder.svg";

function AboutMe() {
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
            <Card className="card">
              <CardHeader
                title={
                  <Avatar
                    className="avatar"
                    alt="Devin Ramsammy"
                    src={ProfilePic}
                  />
                }
                titleTypographyProps={{
                  style: {
                    textAlign: "center"
                  }
                }}
              ></CardHeader>
              <CardContent>
                <p className="about-me-text">
                  My name is Devin Ramsammy and I am currently a rising
                  Sophomore at John Jay College of Criminal Justice pursuing a
                  bachelor of science in Computer Science and Information
                  Security, and a minor in Mathematics. I currently work as a
                  Data Analyst/Full Stack Engineer at{" "}
                  <a href="https://khanstutorial.com/">Khan's Tutorial</a> and
                  as a Software Engineer at{" "}
                  <a href="https://getoptimized.us/">Optimize LLC</a>. I have
                  been coding for 4+ years and I have additional experience in
                  networking, CMS systems, and IT systems. I enjoy working with
                  complex stacks that integrate multiple technologies including
                  the cloud. I hope to release free open source cybersecurity
                  software in the future.
                </p>
                <p>
                  <IconButton href="https://www.linkedin.com/in/devin-ramsammy-5268b218b/">
                    <Icon className="fab fa-linkedin-in" />
                  </IconButton>
                  <IconButton href="https://www.instagram.com/cheff.ramsey/">
                    <Icon className="fab fa-instagram" />
                  </IconButton>
                  <IconButton href="mailto: devinramsammy0@gmail.com">
                    <Icon className="far fa-envelope" />
                  </IconButton>
                  <IconButton href="https://github.com/devinramsammy">
                    <Icon className="fab fa-github" />
                  </IconButton>
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Fade>
    </div>
  );
}

export default AboutMe;
