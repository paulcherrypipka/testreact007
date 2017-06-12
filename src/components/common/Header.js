import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
	render() {
		const { viewStyle, textStyle } = styles;
		return (
			<View style={ viewStyle }>
				<Text style={ textStyle }>
					{ this.props.children }
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		paddingBottom: 16,
		paddingTop: 32,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderColor: '#ccc'
	},
	textStyle: {
		fontSize: 18,
		color: '#383838',
		fontWeight: '600'
	}
});

export { Header };