import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "../utils/sidebar";
import DynamicNavIntroduction from "./introduction";
import DynamicNavExample from "./example";
import DynamicNavProps from "./props";
import Fade from "react-reveal/Fade";
import ParticlesBg from "particles-bg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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

export default function DynamicNavContainer() {
  const [location, setLocation] = useState("Introduction");
  const navSidebar = [
    {
      title: "Introduction",
    },
    {
      title: "Props",
    },
    {
      title: "Example",
    },
  ];
  const classes = useStyles();
  const theme = useTheme();

  switch (location) {
    case "Introduction":
      return (
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <ParticlesBg type="cobweb" bg={true} num={75} />

            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={2}>
                <Fade>
                  <Sidebar
                    listItems={navSidebar}
                    setLocation={setLocation}
                    location={location}
                  ></Sidebar>
                </Fade>
              </Grid>
              <Grid item xs={12} md={7}>
                <DynamicNavIntroduction></DynamicNavIntroduction>
              </Grid>
            </Grid>
          </Container>
        </main>
      );

    case "Example":
      return (
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <ParticlesBg type="cobweb" bg={true} num={75} />

            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={2}>
                <Fade>
                  <Sidebar
                    listItems={navSidebar}
                    setLocation={setLocation}
                    location={location}
                  ></Sidebar>
                </Fade>
              </Grid>
              <Grid item xs={12} md={7}>
                <DynamicNavExample></DynamicNavExample>
              </Grid>
            </Grid>
          </Container>
        </main>
      );

    case "Props":
      return (
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <ParticlesBg type="cobweb" bg={true} num={75} />

            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={2}>
                <Fade>
                  <Sidebar
                    listItems={navSidebar}
                    setLocation={setLocation}
                    location={location}
                  ></Sidebar>
                </Fade>
              </Grid>
              <Grid item xs={12} md={7}>
                <DynamicNavProps></DynamicNavProps>
              </Grid>
            </Grid>
          </Container>
        </main>
      );

    default:
      return (
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <ParticlesBg type="cobweb" bg={true} num={75} />
            <Fade>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item xs={12} md={2}>
                  <Sidebar
                    listItems={navSidebar}
                    setLocation={setLocation}
                    location={location}
                  ></Sidebar>
                </Grid>
                <Grid item xs={12} md={7}></Grid>
              </Grid>
            </Fade>
          </Container>
        </main>
      );
  }
}
