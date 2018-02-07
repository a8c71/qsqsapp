import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Tags = () => (
	<View>
		<Text>
			Tags
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
	</View>
);

export default Tags;
