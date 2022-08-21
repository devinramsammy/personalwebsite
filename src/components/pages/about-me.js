import React from 'react';
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Container,
	Grid,
	Icon,
	IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ParticlesBg from 'particles-bg';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import 'react-typist/dist/Typist.css';
import { ProfilePic } from '../../assets';

const useStyles = makeStyles((theme) => ({
	appBarSpacer: theme.mixins.toolbar,
	avatar: {
		width: '150px',
		height: '150px',
		margin: 'auto',
	},
	card: {
		width: '75vw',
		height: 'auto',
	},
	content: {
		flexGrow: 1,
		height: 'calc(100vh - 90px)',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	alignCenter: {
		textAlign: 'center',
	},
	documentBody: {
		textAlign: 'center',
		fontSize: 'calc((100% + 0.8vw))',
		fontFamily: 'Rajdhani',
		fontWeight: 800,
	},
}));

export default function AboutMe() {
	const classes = useStyles();
	return (
		<>
			<Helmet>
				<title>About Me</title>
				<meta name='description' content='About Me - Devin Ramsammy' />
			</Helmet>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='xl' className={classes.container}>
					<ParticlesBg type='cobweb' bg={true} num={75} />
					<Fade>
						<Grid
							container
							spacing={3}
							justifyContent='center'
							alignItems='center'
							direction='column'
						>
							<Grid item>
								<Card className={classes.card}>
									<CardHeader
										title={
											<Avatar
												className={classes.avatar}
												alt='Devin Ramsammy'
												src={ProfilePic}
											/>
										}
										titleTypographyProps={{
											className: classes.alignCenter,
										}}
									></CardHeader>
									<CardContent>
										<p className={classes.documentBody}>
											My name is Devin Ramsammy and I am currently a Senior at
											John Jay College of Criminal Justice pursuing a BS in
											Computer Science. I am a former 2x SWE Intern at{' '}
											<a href='https://www.bloomberg.com/company/'>
												Bloomberg LP
											</a>
											, a former Data Analyst at{' '}
											<a href='https://khanstutorial.com/'>
												{' '}
												Khan&apos;s Tutorial
											</a>
											, and a former SWE at{' '}
											<a href='https://getoptimized.us/'> Optimize LLC</a>. I am
											a huge tech enthusiast who enjoys using coding to solve
											complex problems. In my free time, I like to trade stocks,
											build computers, and watch Marvel related shows or movies.
											<br></br>
										</p>
										<p>
											<IconButton href='https://www.linkedin.com/in/devin-ramsammy/'>
												<Icon className='fab fa-linkedin-in' />
											</IconButton>
											<IconButton href='https://www.instagram.com/cheff.ramsey/'>
												<Icon className='fab fa-instagram' />
											</IconButton>
											<IconButton href='mailto: devinramsammy0@gmail.com'>
												<Icon className='far fa-envelope' />
											</IconButton>
											<IconButton href='https://github.com/devinramsammy'>
												<Icon className='fab fa-github' />
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
