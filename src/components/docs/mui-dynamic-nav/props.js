import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
	AdditionalButtonsExample,
	DataExample,
	SimpleMenuExample,
	TypeExample,
} from './constants';

const useStyles = makeStyles(() => ({
	documentBody: {
		fontFamily: 'Rajdhani',
		fontWeight: '800',
		paddingTop: '1px',
	},
	alignLeft: {
		textAlign: 'left',
	},
	centeredDiv: { fontSize: '14pt', marginLeft: '10%', marginRight: '10%' },
}));

export default function DynamicNavProps() {
	const classes = useStyles();
	return (
		<div className={classes.documentBody}>
			<h1>Mui Dynamic Nav Props</h1>
			<div className={classes.centeredDiv}>
				<h3>Type</h3>
				<p>
					There will be two built in styles. The collapsible type will have a
					vertical navbar on the left. It will take up a dynamic portion of the
					screen based off of the screen size. In the data prop, you will be
					able to specify if a certain line item is collapsible or expandable.
				</p>
			</div>
			<div className={classes.alignLeft}>
				<SyntaxHighlighter
					language='javascript'
					style={solarizedLight}
					showLineNumbers
					wrapLines
				>
					{TypeExample}
				</SyntaxHighlighter>
			</div>
			<div className={classes.centeredDiv}>
				<h3>Data</h3>
				<p>
					The data JSON object can take two different styles depending on if you
					want to use the specific types defined in the type prop. The drawer
					type can be expanded infinitely, while the hoverable data will be cut
					off at more than seven entries.
				</p>
			</div>
			<div className={classes.alignLeft}>
				<SyntaxHighlighter
					language='javascript'
					style={solarizedLight}
					showLineNumbers
					wrapLines
				>
					{DataExample}
				</SyntaxHighlighter>
			</div>
			<div className={classes.centeredDiv}>
				<h3>Title</h3>
				<p>
					The title prop can take the form of a string or an image file.
					Currently, it is only possible to have the title in the specified
					locations based on the type. If the type is hoverable, the title will
					be on the left. If the type is drawer, the title will be in the
					middle.
				</p>
			</div>
			<div className={classes.centeredDiv}>
				<h3>Simple Menu</h3>
				<p>
					The optional simpleMenu prop will accept a JSON data object. The
					simple menu will have a designated icon on the far right of the
					navbar.
				</p>
			</div>
			<div className={classes.alignLeft}>
				<SyntaxHighlighter
					language='javascript'
					style={solarizedLight}
					showLineNumbers
					wrapLines
				>
					{SimpleMenuExample}
				</SyntaxHighlighter>
			</div>
			<div sclassName={classes.centeredDiv}>
				<h3>Additional Buttons</h3>
				<p>
					The optional additionalButtons prop will accept a JSON data object.
					The additionalButtons will be located to the right of the simpleMenu
					icon.
				</p>
			</div>
			<div className={classes.alignLeft}>
				<SyntaxHighlighter
					language='javascript'
					style={solarizedLight}
					showLineNumbers
					wrapLines
				>
					{AdditionalButtonsExample}
				</SyntaxHighlighter>
			</div>
			<br></br>
		</div>
	);
}
