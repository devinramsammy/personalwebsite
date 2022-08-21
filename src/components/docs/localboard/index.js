import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DocumentContainer from '../utils/documentContainer';

const useStyles = makeStyles(() => ({
	documentBody: {
		fontSize: '14pt',
		marginLeft: '10%',
		marginRight: '10%',
	},
}));

export default function Localboard() {
	const classes = useStyles();

	return (
		<DocumentContainer documentTitle={'LocalBoard'}>
			<div className={classes.documentBody}>
				<p>
					Localboard is an offline project management tool that was created to
					help circumvent web connection issues I was facing at college. This
					project allows for the user to create multiple kanban boards, attach
					descriptions and dates to each task, and to view the tasks in a
					calendar.
					<br></br>
					<br></br>
					Built using Electron, React, Material-UI, and Typescript.
				</p>
				<p>To view the codebase:</p>
				<a href='https://github.com/devinramsammy/localboard'>Link to repo</a>
			</div>
		</DocumentContainer>
	);
}
