import { Box } from '@chakra-ui/react';
import React from 'react';

const Main: React.FunctionComponent = ({ children }) => {
	return (
		<Box flexGrow={1} minHeight="100vh">
			{children}
		</Box>
	);
};

export default Main;
