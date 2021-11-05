import React from 'react';
import { Box, Button, Flex, useColorMode } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';

export const Layout: React.FunctionComponent = ({ children }) => {
	return (
		<Flex flexDir="column" bg="gray.50">
			<Header />{' '}
			<Flex flexGrow={1}>
				<Sidebar />
				<Main>{children}</Main>
			</Flex>
		</Flex>
	);
};
