import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Questions = () => (
	<View>
		<Text>
			Questions
		</Text>
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
	</View>
);

export default Questions;
