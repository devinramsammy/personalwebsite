import React from 'react';
import { Paper } from '@material-ui/core';

import Fade from 'react-reveal/Fade';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CODE = `import React, { Component } from "react";
import DynamicNavbar from "mui-dynamic-nav";
const navbarData = [
  { title: "Home", href: "/", icon: "dashboard" }
]
class App extends Component {
  render() {
    return (
      <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <DynamicNavbar
            title={"TITLE"}
            data={navbarData}
            type="hoverable"
          ></DynamicNavbar>
      </div>
    )
}`;

export default function DynamicNavIntroduction() {
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
					<h1>Mui Dynamic Nav Documentation</h1>

					<div
						style={{ fontSize: '14pt', marginLeft: '10%', marginRight: '10%' }}
					>
						<a href='https://www.npmjs.com/package/mui-dynamic-nav'>
							Link to Package
						</a>
						<p>
							Mui-Dynamic-Nav was created as an utility to help streamline the
							inital development process for react dashboard projects. It is a
							dynamic package that works ontop of the react-router-dom, React,
							and Material-UI frameworks. It is dynamic due to the fact that it
							uses the Material UI theming technology which is a powerful
							styling tool.
						</p>
						<p>To get started:</p>
					</div>
					<div style={{ textAlign: 'left' }}>
						<SyntaxHighlighter
							language='javascript'
							style={solarizedLight}
							showLineNumbers
							wrapLines
						>
							{CODE}
						</SyntaxHighlighter>
					</div>
					<br></br>
				</div>
			</Paper>
		</Fade>
	);
}
