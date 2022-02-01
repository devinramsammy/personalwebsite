import React from "react";
import { Fade } from "react-reveal";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  CardHeader,
  Icon,
  IconButton,
} from "@material-ui/core";
import "react-typist/dist/Typist.css";
import ParticlesBg from "particles-bg";
import ProfilePic from "../assets/placeholder.jpg";
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

function AboutMe() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="About Me - Devin Ramsammy" />
      </Helmet>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <ParticlesBg type="cobweb" bg={true} num={75} />
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
                        textAlign: "center",
                      },
                    }}
                  ></CardHeader>
                  <CardContent>
                    <p className="about-me-text">
                      My name is Devin Ramsammy and I am currently a Junior at
                      John Jay College of Criminal Justice pursuing a BS in
                      Computer Science and a minor in Mathematics. I currently
                      work as a Software Engineer at{" "}
                      <a href="https://getoptimized.us/">Optimize LLC</a>. I
                      have been coding for 4+ years and I have additional
                      experience in networks, CMS system design, and DBMS. I
                      enjoy working with complex stacks that integrate multiple
                      technologies including the cloud. In my free time, I enjoy
                      trading stocks, building computers, and watching Marvel
                      related shows or movies.
                      <br></br>
                    </p>
                    <p>
                      <IconButton href="https://www.linkedin.com/in/devin-ramsammy/">
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
        </Container>
      </main>
    </>
  );
}

export default AboutMe;
