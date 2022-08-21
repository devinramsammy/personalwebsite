import PropTypes from 'prop-types';
import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default function Sidebar({ listItems, setLocation, location }) {
	const checkLocation = (title) => {
		return location === title;
	};

	return (
		<div>
			<List>
				{listItems.map((item, index) => {
					return (
						<ListItem
							key={index}
							onClick={() => {
								setLocation(item.title);
							}}
							button
							selected={checkLocation(item.title)}
							divider
						>
							<ListItemText primary={item.title} />
						</ListItem>
					);
				})}
			</List>
		</div>
	);
}

Sidebar.propTypes = {
	listItems: PropTypes.array,
	location: PropTypes.string,
	setLocation: PropTypes.func,
};
