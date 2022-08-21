import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DocumentContainer from '../utils/documentContainer';

const useStyles = makeStyles(() => ({
	documentBody: {
		fontSize: '14pt',
		marginLeft: '10%',
		marginRight: '10%',
	},
	alignLeft: {
		textAlign: 'left',
	},
}));

export default function DatabaseAnalytics() {
	const classes = useStyles();

	return (
		<DocumentContainer documentTitle={'Police Shooting Database Analytics'}>
			<div className={classes.documentBody}>
				<p>
					This project was created during the CUNY 2021 Hackathon.
					<br></br>
					<br></br>
					As an anti-racism activist and a person of Afro-Caribbean descent, the
					current events that have been in the news were horrifying but not
					surprising. A lot of the debate surrounding the issues of police
					brutality seemed to have similar themes; these actions were unique and
					not premeditated. However, I felt that this was untrue. After coming
					across the Washington Post Database for police-civilian shootings, I
					knew I wanted to create a medium in which this important data is
					portrayed effectively and to provide insightful data analytics for
					these debates.
					<br></br>
					<br></br>
					Using d3.js, React, and Bootstrap, I created visualizations for
					results that I came across after analyzing the data. I created a d3
					USA map to show where these shootings were concentrated and I provided
					sources for every data point. After analyzing the data, I provided
					evidence to support these claims:
					<ul className={classes.alignLeft}>
						<li>
							African Americans and Hispanic young adults are disproportionately
							killed by the police in the United States.
						</li>
						<li>
							African American minors are 3x more likely to be killed by the
							police and Hispanic minors are 2x more likely to be killed by the
							police than their white counterparts.
						</li>
						<li>
							There has yet to be a significant change to the amount of people
							killed per year by the police.
						</li>
					</ul>
				</p>

				<p>To view these visualizations:</p>
				<a href='https://devinramsammy.github.io/'>Link to Website</a>
			</div>
		</DocumentContainer>
	);
}
