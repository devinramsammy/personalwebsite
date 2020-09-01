import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "../utils/sidebar";
import DynamicNavIntroduction from "./introduction";
import DynamicNavExample from "./example";
import DynamicNavProps from "./props";
import Fade from "react-reveal/Fade";
import ParticlesBg from "particles-bg";

export default function DynamicNavContainer() {
  const [location, setLocation] = useState("Introduction");
  const navSidebar = [
    {
      title: "Introduction"
    },
    {
      title: "Props"
    },
    {
      title: "Example"
    }
  ];
  switch (location) {
    case "Introduction":
      return (
        <div>
          <ParticlesBg type="cobweb" bg={true} />

          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={2}>
              <Fade bottom>
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
        </div>
      );

    case "Example":
      return (
        <div>
          <ParticlesBg type="cobweb" bg={true} />

          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={2}>
              <Fade bottom>
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
        </div>
      );

    case "Props":
      return (
        <div>
          <ParticlesBg type="cobweb" bg={true} />

          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={2}>
              <Fade bottom>
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
        </div>
      );

    default:
      return (
        <div>
          <ParticlesBg type="cobweb" bg={true} />
          <Fade bottom>
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
        </div>
      );
  }
}
