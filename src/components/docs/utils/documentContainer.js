import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ParticlesBg from 'particles-bg';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: 'calc(100vh - 90px)',
		overflow: 'auto',
	},
	card: {
		width: '75vw',
		height: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	documentBody: {
		fontFamily: 'Rajdhani',
		fontWeight: '800',
		paddingTop: '1px',
	},
}));

export default function DocumentContainer({ children, documentTitle }) {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>{documentTitle}</title>
				<meta name='description' content={documentTitle} />
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
								<Paper className={classes.card}>
									<div className={classes.documentBody}>
										<h1>{documentTitle}</h1>
										{children}
										<br></br>
									</div>
								</Paper>
							</Grid>
						</Grid>
					</Fade>
				</Container>
			</main>
		</>
	);
}

DocumentContainer.propTypes = {
	children: PropTypes.node,
	documentTitle: PropTypes.string,
};
