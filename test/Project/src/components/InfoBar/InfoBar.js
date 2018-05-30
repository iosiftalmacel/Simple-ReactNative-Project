import React from 'react';
import { Text, View, Image, TouchableNativeFeedback, Linking } from 'react-native';
import Images from '../../utils/images';
import Strings from '../../utils/strings';
import styles from './styles';

export default class InfoBar extends React.Component {
    interact(url) {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }
    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.line} />
                <View style={styles.container} >
                    <TouchableNativeFeedback
                        onPress={() => this.interact(this.props.website)}
                        background={TouchableNativeFeedback.Ripple('#686868', true)}>
                        <View style={styles.iconContainer} >
                            <Image style={styles.icon} source={Images.website_icon} />
                            <Text style={styles.text}>{Strings.info_action_website}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={() => this.interact("geo:" + this.props.latitude + "," + this.props.longitude)}
                        background={TouchableNativeFeedback.Ripple('#686868', true)}>
                        <View style={styles.iconContainer} >
                            <Image style={styles.icon} source={Images.location_icon} />
                            <Text style={styles.text}> {Strings.info_action_location} </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={() => this.interact("tel:" + this.props.phone)}
                        background={TouchableNativeFeedback.Ripple('#686868', true)}>
                        <View style={styles.iconContainer} >
                            <Image style={styles.icon} source={Images.call_icon} />
                            <Text style={styles.text}>{Strings.info_action_call}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.line} />
            </View>
        );
    }
}
