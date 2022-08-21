import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ParticlesBg from 'particles-bg';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import { ResumeImage, ResumePDF } from '../../assets';

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
	resumeImg: { maxHeight: '80vh', maxWidth: '90vw' },
}));

export default function Resume() {
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
						<a href={ResumePDF} download='DevinRamsammyResume.pdf'>
							<img
								src={ResumeImage}
								alt="Devin Ramsammy's Resume"
								className={classes.resumeImg}
							></img>
						</a>
					</Fade>
				</Container>
			</main>
		</>
	);
}
