import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 400,
        paddingTop: 5,
        paddingBottom: 5,
    },

    cardImage: {
        height: 220,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    cardHeart: {
        height: 34,
        width: 34,
        marginRight: 20,
        marginTop: 20,
        right: 0,
        position: 'absolute',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    cardText: {
        marginLeft: 20,
    },

    placeholderCard: {
        flex: 1,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#242424',
        borderRadius: 20,
    },
    placeholderImage: {
        backgroundColor: '#787878',
        height: 220,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    placeholderHeart: {
        backgroundColor: '#565656',
        height: 34,
        width: 34,
        marginRight: 20,
        marginTop: 20,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    placeholderText: {
        backgroundColor: '#787878',
        marginLeft: 20,
    }
});