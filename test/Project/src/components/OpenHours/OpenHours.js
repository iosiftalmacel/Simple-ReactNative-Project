import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import Images from '../../utils/images';
import Strings from '../../utils/strings';
import styles from './styles';

export default class OpenHours extends React.Component {


    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            currentDay: (date.getDay() - 1) % 6
        }
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    render() {
        var { currentDay } = this.state;
        const {data} = this.props;
        
        return (
            <View style={this.props.style}>
                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        if (index == currentDay)
                            return (
                                <View style={[styles.itemContainer, { width: 140, backgroundColor: '#343434' }]}>
                                    <Text style={[styles.secondText, { textDecorationLine: item.is_open ? 'none' : 'line-through' }]}> {this.capitalizeFirstLetter(item.day.substring(0, 3))} </Text>
                                    <Text style={[styles.firstText, { marginTop: 4 }]}> {item.open + " - " + item.close} </Text>
                                    <Image style={styles.gradient} source={Images.gradient_tab} />
                                </View>
                            )
                        else
                            return (
                                <View style={[styles.itemContainer, { width: 70, backgroundColor: '#2b2b2b' }]}>
                                    <Text style={[styles.firstText, { textDecorationLine: item.is_open ? 'none' : 'line-through' }]}> {this.capitalizeFirstLetter(item.day.substring(0, 3))} </Text>
                                </View>
                            )
                    }}
                />
            </View>
        );
    }
}
