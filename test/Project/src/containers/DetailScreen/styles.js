import { StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#242424',
    },
    image: {
        height: 230
    },
    triangle: {
        width: 0,
        height: 0,
        top: 150,
        position: 'absolute',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 0,
        borderRightWidth: Dimensions.get('window').width,
        borderBottomWidth: 80,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#242424'
    },
    cardText1: {
        marginLeft: 20,
        color: '#c7c7c7'
    },

    cardText2: {
        marginLeft: 20,
        color: '#999999'
    },

    fakeImage:{
        height: 230, 
        backgroundColor: '#787878'
    }
});