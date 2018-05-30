import React from 'react';
import { Text, View, ScrollView, StatusBar, Image, Animated } from 'react-native';
import { InfoBar as InfoBar, OpenHours as OpenHours } from '../../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Strings from '../../utils/strings';
import styles from './styles';
import * as DetailsActions from '../../actions/DetailsActions';


class DetailScreen extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0.7),
    }

    componentWillMount() {
        this.props.loadDetailsData();
    }

    componentDidMount() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.fadeAnim,
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
        const { data } = this.props;
        var { fadeAnim } = this.state;

        var view = data ? (
            <ScrollView style={styles.content}>
                <Image style={styles.image} source={{ uri: data.image }} />
                <View style={styles.triangle} />

                <Text style={[styles.cardText1, { fontSize: 26, fontWeight: 'bold', marginTop: -10 }]}> {data.brand} </Text>
                <Text style={[styles.cardText2, { fontSize: 18, marginTop: 4 }]}> {data.title}  </Text>
                <Text style={[styles.cardText2, { fontSize: 13, marginTop: 9 }]}> {data.location_title}  </Text>

                <InfoBar style={{ marginTop: 35 }} />

                <Text style={[styles.cardText1, { fontSize: 20, marginTop: 20, marginBottom: 20, fontWeight: 'bold' }]}> {Strings.opening_times} </Text>

                <OpenHours data={data.open_hours} />

                <Text style={[styles.cardText1, { fontSize: 20, marginTop: 25, marginBottom: 10, fontWeight: 'bold' }]}> {Strings.perks_details} </Text>
                <Text style={[styles.cardText2, { fontSize: 18, marginTop: 4 }]}>
                   {data.description}
                </Text>
            </ScrollView>
        )
        :
        (
            <View style={styles.content}>
                <Animated.View style={[styles.fakeImage, {opacity: fadeAnim}]} />
                <View style={styles.triangle} />
            </View>
        )
        return view;
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.detailsReducer.loading,
        data: state.detailsReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(DetailsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);

