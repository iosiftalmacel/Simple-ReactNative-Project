import React from 'react';
import { Text, View, Animated } from 'react-native';
import styles from './styles';

export default class CardPlaceholder extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0.7),
    }

    componentDidMount() {
        Animated.loop(
            Animated.sequence([
                Animated.timing( this.state.fadeAnim,
                {
                    toValue: 1,
                    duration: 500,
                }),
                Animated.timing(this.state.fadeAnim,
                {
                    toValue: 0.7,
                    duration: 500,
                })
            ])
        ).start();
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                <View style={styles.placeholderCard}>
                    <View style={styles.placeholderImage}>
                        <View style={styles.placeholderHeart} />
                    </View>

                    <View style={[styles.placeholderText, { width: '40%', height: 30, marginTop: 20 }]} />
                    <View style={[styles.placeholderText, { width: '70%', height: 20, marginTop: 15 }]} />
                    <View style={[styles.placeholderText, { width: '50%', height: 18, marginTop: 15 }]} />
                </View>
            </Animated.View>
        );
    }
}