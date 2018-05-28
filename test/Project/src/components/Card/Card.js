import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import Images from '../../utils/images';

export default class Card extends React.Component {
    _onPressButton() {
        // this.props.navigation.navigate("DetailScreen")
    }
    render() {
        const { type, is_favourited, image, title, subtitle, offer } = this.props.itemData;

        return (
            <TouchableHighlight onPress={this._onPressButton} >
                <View style={styles.container}>
                    <View style={styles.placeholderCard}>
                        <Image style={styles.cardImage} source={{ uri: image }} />
                        <Image style={styles.cardHeart} source={is_favourited ? Images.like_filled : Images.like_empty} />

                        <Text style={[styles.cardText, { color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 20 }]}> {title} </Text>
                        <Text style={[styles.cardText, { color: '#adadad', fontSize: 18, marginTop: 10 }]}> {subtitle} </Text>
                        {offer ? <Text style={[styles.cardText, { color: '#adadad', fontSize: 15, marginTop: 10 }]}> {offer.location.walking_time} </Text> : null}
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}