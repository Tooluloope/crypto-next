import { Box } from '@chakra-ui/react';
import React from 'react';

const Sidebar = () => {
	return (
		<Box
			width="300px"
			// style={{
			// 	height: 'calc( 100vh - 100px)',
			// }}
			display={{ base: 'none', xl: 'block' }}
			border="1px solid black"
			pos="fixed"
			bottom={0}
			height="calc( 100vh - 100px)"
		>
			<></>
		</Box>
	);
};

export default Sidebar;
