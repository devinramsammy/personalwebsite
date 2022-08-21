import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ParticlesBg from 'particles-bg';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import resumePDF from '../assets/Resume.pdf';
import resume from '../assets/resume.png';

const useStyles = makeStyles((theme) => ({
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: 'calc(100vh - 120px)',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
}));

function Resume() {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Resume</title>
				<meta name='description' content='Resume - Devin Ramsammy' />
			</Helmet>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='xl' className={classes.container}>
					<ParticlesBg type='cobweb' bg={true} num={75} />
					<Fade>
						<a href={resumePDF} download='DevinRamsammyResume.pdf'>
							<img
								className='resume'
								src={resume}
								alt="Devin Ramsammy's Resume"
								style={{ maxHeight: '80vh' }}
							></img>
						</a>
					</Fade>
				</Container>
			</main>
		</>
	);
}

export default Resume;
