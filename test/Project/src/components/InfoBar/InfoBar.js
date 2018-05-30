import React from 'react';
import { Text, View, Image } from 'react-native';
import Images from '../../utils/images';
import Strings from '../../utils/strings';
import styles from './styles';

export default class InfoBar extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.line} />
                <View style={styles.container} >
                    <View style={styles.iconContainer} >
                        <Image style={styles.icon} source={Images.website_icon} />
                        <Text style={styles.text}>{Strings.info_action_website}</Text>
                    </View>
                    <View  style={styles.iconContainer} >
                        <Image style={styles.icon} source={Images.location_icon} />
                        <Text style={styles.text}> {Strings.info_action_location} </Text>
                    </View>
                    <View  style={styles.iconContainer} >
                        <Image style={styles.icon} source={Images.call_icon} />
                        <Text style={styles.text}>{Strings.info_action_call}</Text>
                    </View>

                </View>
                <View style={styles.line} />
            </View>
        );
    }
}
