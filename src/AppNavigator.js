import React from 'react';
import { Router, Modal, Scene, Stack, Drawer } from 'react-native-router-flux';

import Login from './screens/Login';
import Home from './screens/Home';
import Questions from './screens/Questions';
import Question from './screens/Question';
import NewQuestion from './screens/NewQuestion';
import Tags from './screens/Tags';
import DrawerContent from './screens/DrawerContent';

const AppNavigator = () => (
	<Router>
		<Modal key='modal'>
			<Stack key='root'>
				<Drawer key='drawer' contentComponent={DrawerContent} hideNavBar>
					<Scene key='Home' component={Home} title='QsQs'/>
				</Drawer>

				<Scene key='Questions' component={Questions} title='Questions'/>
				<Scene key='Question' component={Question}/>
				<Scene key='NewQuestion' component={NewQuestion}/>
				<Scene key='Tags' component={Tags}/>
			</Stack>
			<Scene key='Login' component={Login}/>
		</Modal>
	</Router>
);

export default AppNavigator;
