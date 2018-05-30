import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Images from '../../utils/images';

export default class Card extends React.Component {
    _onPressButton() {
        this.props.navigation.navigate("DetailScreen")
    }
    render() {
        const { type, is_favourited, image, title, subtitle, offer } = this.props.itemData;

        return (
            <TouchableOpacity onPress={this._onPressButton.bind(this)} activeOpacity = {0.9} >
                <View style={styles.container}>
                    <View style={styles.placeholderCard}>
                        <Image style={styles.cardImage} source={{ uri: image }} />
                        <Image style={styles.cardHeart} source={is_favourited ? Images.like_filled : Images.like_empty} />

                        <Text style={styles.cardText}> {title} </Text>
                        <Text style={styles.cardText2}> {subtitle} </Text>
                        {offer ? <Text style={styles.cardText3}> {offer.location.walking_time} </Text> : null}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}