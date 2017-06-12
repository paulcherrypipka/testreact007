import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Card, CardSection } from './common';

class Product extends Component {
	render() {
		return (
			<Card>

				<CardSection>
					<View style={{ flexDirection: 'row' }}>
					<Image 
						source={{ uri: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg' }} 
						style={{ width: null, height: 200, flex: 1 }}
					/>
				</View>
				</CardSection>
				<CardSection>
					<Text style={{ fontWeight: '600', fontSize: 18, color: '#383838' }}>
						Amazing Pizza
					</Text>
				</CardSection>
				<CardSection>
					<Text>
						Gluten-free yuccie fanny pack, vinyl DIY knausgaard selvage roof party tattooed portland flannel tote bag venmo tacos. Next level marfa live-edge jean shorts meditation cornhole. Pickled neutra snackwave street art master cleanse. Godard venmo scenester crucifix heirloom prism. Church-key swag flannel, man bun woke poutine viral 90's single-origin coffee actually cray. Mustache fap seitan authentic, ennui plaid skateboard tofu. Edison bulb jean shorts pok pok lo-fi, glossier cliche banjo.
					</Text>
				</CardSection>
			</Card>
		);
	}
}

export default Product;