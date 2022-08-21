import React from 'react';
import { Paper } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const TYPE = `/*Displays navbar icons without drawer. If there is more than 7 entries in navbarData,
the navbar will be switched to a drawer. Will switch to drawer when screen size is less than 600px*/
<DynamicNavbar
  title={" "}
  data={navbarData}
  type="hoverable"
></DynamicNavbar>
/*Displays navbar icons in a drawer which can be opened with the icon on the left hand corner.*/
<DynamicNavbar
  title={" "}
  data={navbarData}
  type="drawer"
></DynamicNavbar>`;

const DATA = `// Without collapsible features in the drawer
const navConfig1 = [
  { title: "someTitle",
  href: "/someLocation",
  // Icon uses material library from google
  icon: "list" },
  {...}
]
// With collapsible features in the drawer
const navConfig2 = [
  // Not possible to make expandable list reference a link
  { title: "someTitle",
  Pages: [{
  title: "expanded title",
  href: "/someLocation",
  // Icon uses material library from google
  icon: "list" },
  {...}]},
  {...}
]
...
<DynamicNavbar
  title={" "}
  data={navConfig1}
  type="hoverable"
></DynamicNavbar>`;

const SIMPLE_MENU = `const someFunction = () => {
  console.log("some");
}
const simpleMenuConfig = [
  {title: "someTitle",
  function: someFunction,
  // Icon uses material library from google
  icon: "list" },
  {...}
]
...
<DynamicNavbar
  title={" "}
  data={navConfig}
  type="hoverable"
  simpleMenu={simpleMenuConfig}
></DynamicNavbar>`;

const ADDITIONAL_BUTTONS = `const someFunction = () => {
  console.log("some");
}
const additionalButtonsConfig = [{
  /* Set property iconButton to false or don't include in config to use normal button */
  iconButton: true,
  function: someFunction,
  title: "someTitle",
  icon: true }, 
  {...}
]
...
<DynamicNavbar
  title={" "}
  data={navConfig}
  type="hoverable"
  additionalButtons={additionalButtonsConfig}
></DynamicNavbar>`;

export default function DynamicNavProps() {
	return (
		<Fade>
			<Paper>
				<div
					style={{
						fontFamily: 'Rajdhani',
						fontWeight: '800',
						paddingTop: '1px',
					}}
				>
					<h1>Mui Dynamic Nav Props</h1>
					<div
						style={{ fontSize: '14pt', marginLeft: '10%', marginRight: '10%' }}
					>
						<h3>Type</h3>
						<p>
							There will be two built in styles. The collapsible type will have
							a vertical navbar on the left. It will take up a dynamic portion
							of the screen based off of the screen size. In the data prop, you
							will be able to specify if a certain line item is collapsible or
							expandable.
						</p>
					</div>
					<div style={{ textAlign: 'left' }}>
						<SyntaxHighlighter
							language='javascript'
							style={solarizedLight}
							showLineNumbers
							wrapLines
						>
							{TYPE}
						</SyntaxHighlighter>
					</div>
					<div
						style={{ fontSize: '14pt', marginLeft: '10%', marginRight: '10%' }}
					>
						<h3>Data</h3>
						<p>
							The data JSON object can take two different styles depending on if
							you want to use the specific types defined in the type prop. The
							drawer type can be expanded infinitely, while the hoverable data
							will be cut off at more than seven entries.
						</p>
					</div>
					<div style={{ textAlign: 'left' }}>
						<SyntaxHighlighter
							language='javascript'
							style={solarizedLight}
							showLineNumbers
							wrapLines
						>
							{DATA}
						</SyntaxHighlighter>
					</div>
					<div
						style={{ fontSize: '14pt', marginLeft: '10%', marginRight: '10%' }}
					>
						<h3>Title</h3>
						<p>
							The title prop can take the form of a string or an image file.
							Currently, it is only possible to have the title in the specified
							locations based on the type. If the type is hoverable, the title
							will be on the left. If the type is drawer, the title will be in
							the middle.
						</p>
					</div>
					<div
						style={{ fontSize: '14pt', marginLeft: '10%', marginRight: '10%' }}
					>
						<h3>Simple Menu</h3>
						<p>
							The optional simpleMenu prop will accept a JSON data object. The
							simple menu will have a designated icon on the far right of the
							navbar.
						</p>
					</div>
					<div style={{ textAlign: 'left' }}>
						<SyntaxHighlighter
							language='javascript'
							style={solarizedLight}
							showLineNumbers
							wrapLines
						>
							{SIMPLE_MENU}
						</SyntaxHighlighter>
					</div>
					<div
						style={{ fontSize: '14pt', marginLeft: '10%', marginRight: '10%' }}
					>
						<h3>Additional Buttons</h3>
						<p>
							The optional additionalButtons prop will accept a JSON data
							object. The additionalButtons will be located to the right of the
							simpleMenu icon.
						</p>
					</div>
					<div style={{ textAlign: 'left' }}>
						<SyntaxHighlighter
							language='javascript'
							style={solarizedLight}
							showLineNumbers
							wrapLines
						>
							{ADDITIONAL_BUTTONS}
						</SyntaxHighlighter>
					</div>
					<br></br>
				</div>
			</Paper>
		</Fade>
	);
}
