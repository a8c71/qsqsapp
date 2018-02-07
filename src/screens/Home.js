import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

const Home = () => (
	<View>
		<Text>
			Home
		</Text>
		<TouchableOpacity
			onPress={() => Actions.Questions()}
		>
			<Text>
				got to Questions
			</Text>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() => Actions.Question()}
		>
			<Text>
				got to Question
			</Text>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() => Actions.NewQuestion()}
		>
			<Text>
				got to NewQuestion
			</Text>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() => Actions.Tags()}
		>
			<Text>
				got to Tags
			</Text>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() => Actions.Login()}
		>
			<Text>
				got to Login
			</Text>
		</TouchableOpacity>
	</View>
);

export default Home;
