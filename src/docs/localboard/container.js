import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ParticlesBg from 'particles-bg';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

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
}));

export default function Localboard() {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Localboard</title>
				<meta name='description' content='Localboard' />
			</Helmet>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='xl' className={classes.container}>
					<ParticlesBg type='cobweb' bg={true} num={75} />
					<Fade>
						<Grid
							container
							spacing={3}
							justify='center'
							alignItems='center'
							direction='column'
						>
							<Grid item>
								<Paper className='card'>
									<div
										style={{
											fontFamily: 'Rajdhani',
											fontWeight: '800',
											paddingTop: '1px',
										}}
									>
										<h1>Localboard</h1>

										<div
											style={{
												fontSize: '14pt',
												marginLeft: '10%',
												marginRight: '10%',
											}}
										>
											<p>
												Localboard is an offline project management tool that
												was created to help circumvent web connection issues I
												was facing at college. This project allows for the user
												to create multiple kanban boards, attach descriptions
												and dates to each task, and to view the tasks in a
												calendar.
												<br></br>
												<br></br>
												Built using Electron, React, Material-UI, and
												Typescript.
											</p>
											<p>To view the codebase:</p>
											<a href='https://github.com/devinramsammy/localboard'>
												Link to repo
											</a>
										</div>
										<div style={{ textAlign: 'left' }}></div>
										<br></br>
									</div>
								</Paper>
							</Grid>
							<Grid item></Grid>
						</Grid>
					</Fade>
				</Container>
			</main>
		</>
	);
}
