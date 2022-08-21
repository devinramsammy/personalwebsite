import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ParticlesBg from 'particles-bg';
import { Helmet } from 'react-helmet';
import { Zoom } from 'react-reveal';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const useStyles = makeStyles((theme) => ({
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: 'calc(100vh - 90px)',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	headerText: {
		fontSize: 'calc((75vw - 4.5rem) / 3)',
		fontFamily: 'Rajdhani',
		fontWeight: 800,
	},
	headerStyle: { display: 'inline-block', fontFamily: 'Rajdhani' },
	preWhiteSpace: { whiteSpace: 'pre' },
}));

export default function Homepage() {
	const classes = useStyles();
	return (
		<>
			<Helmet>
				<title>Homepage</title>
				<meta name='description' content="Devin Ramsammy's portfolio website" />
			</Helmet>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='xl' className={classes.container}>
					<ParticlesBg type='cobweb' num={45} bg={true} />
					<Typist
						startDelay={500}
						avgTypingDelay={150}
						className={classes.headerText}
						cursor={{ show: false }}
					>
						HELLO!
					</Typist>
					<div>
						<h1>
							<Zoom left cascade duration={1500} delay={300} ssrReveal>
								<div className={classes.headerStyle}>My name is Devin</div>
							</Zoom>
							<span className={classes.preWhiteSpace}> </span>
							<Zoom right cascade duration={1500} delay={300} ssrReveal>
								<div className={classes.headerStyle}>and I code and stuff</div>
							</Zoom>
						</h1>
					</div>
				</Container>
			</main>
		</>
	);
}
