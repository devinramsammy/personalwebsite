import React from 'react';
import DocumentContainer from '../utils/documentContainer';
import DynamicNavExample from './example';
import DynamicNavIntroduction from './introduction';
import DynamicNavProps from './props';

export default function DynamicNavContainer() {
	return (
		<DocumentContainer documentTitle={''}>
			<DynamicNavIntroduction />
			<DynamicNavExample />
			<DynamicNavProps />
		</DocumentContainer>
	);
}
