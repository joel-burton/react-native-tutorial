import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';


var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});


class Dashboard extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> This is the Dashboard </Text>
                <Text> {this.props.userInfo.name} </Text>
            </View>
        )
    }
}


module.exports = Dashboard;
