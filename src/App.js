import React from 'react';
import {
	ThemeProvider,
	createTheme,
	makeStyles,
} from '@material-ui/core/styles';
import DynamicNavbar from 'mui-dynamic-nav';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {
	DatabaseAnalytics,
	DynamicNavContainer,
	Localboard,
} from './components/docs';
import { AboutMe, Homepage, Resume } from './components/pages';

const navTheme = createTheme({
	shadows: ['none'],
	palette: {
		primary: {
			main: '#ffffff',
			contrastText: '#838383',
		},
		secondary: {
			main: '#ffffff',
		},
		background: {
			paper: '#ffffff',
		},
		text: {
			primary: '#838383',
		},
	},
	overrides: {
		MuiIcon: {
			colorPrimary: {
				color: '#838383',
			},
		},
	},
});

const docsTheme = createTheme({
	overrides: {
		MuiListItem: {
			root: {
				'&$selected': {
					backgroundColor: 'darkgray',
					color: 'white',
					'&:hover': {
						backgroundColor: 'gray',
					},
				},
			},
			button: {
				'&:hover': {
					backgroundColor: 'gray',
					color: 'white',
				},
			},
		},
	},
});

const navbarData = [
	{ title: 'Home', href: '/', icon: 'dashboard' },
	{ title: 'About Me', href: '/about-me', icon: 'face' },
	{ title: 'Resume', href: '/resume', icon: 'description_icon' },
	{
		title: 'Public Projects',
		icon: 'account_tree',
		pages: [
			{
				title: 'Dynamic Navbar',
				href: '/mui-dynamic-nav',
				icon: 'map',
			},
			{
				title: 'Police Shootings Database Analytics',
				href: '/police-shootings-analytics',
				icon: 'bar_chart',
			},
			{
				title: 'Localboard',
				href: '/localboard',
				icon: 'dashboard_customize',
			},
		],
	},
];

const useStyles = makeStyles(() => ({
	app: { textAlign: 'center', left: 0, right: 0, display: 'flex' },
}));

export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.app}>
			<ThemeProvider>
				<Router>
					<ThemeProvider theme={navTheme}>
						<DynamicNavbar
							title={''}
							data={navbarData}
							type='hoverable'
						></DynamicNavbar>
					</ThemeProvider>

					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route exact path='/about-me' component={AboutMe} />
						<Route exact path='/resume' component={Resume} />
						<ThemeProvider theme={docsTheme}>
							<Route
								exact
								path='/mui-dynamic-nav'
								component={DynamicNavContainer}
							/>
							<Route
								exact
								path='/police-shootings-analytics'
								component={DatabaseAnalytics}
							/>
							<Route exact path='/localboard' component={Localboard} />
						</ThemeProvider>
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}
