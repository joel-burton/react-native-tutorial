import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
import api from '../Utils/api';
import Profile from './Profile';
import Repositories from './Repositories';
import Notes from './Notes';

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
    },
});


class Dashboard extends Component {

    makeBackground(button){
        var styleObj ={
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        };

        if (button === 0) {
            styleObj.backgroundColor = "#48BBEC";
        } else if (button ===1) {
            styleObj.backgroundColor = "#E77AAE";
        } else {
            styleObj.backgroundColor = "#758BF4";
        }

        return styleObj;
    }

    goToProfile(){
        this.props.navigator.push({
            component: Profile,
            title: 'Profile Page',
            passProps: {userInfo: this.props.userInfo}
        });
    }

    goToRepos(){
        api.getRepos(this.props.userInfo.login)
            .then((response) => {
                this.props.navigator.push({
                    component: Repositories,
                    title: 'Repositories',
                    passProps: {
                        userInfo: this.props.userInfo,
                        repos: response
                    }
                });
            });
    }

    goToNotes(){
        api.getNotes(this.props.userInfo.login)
            .then((response) => {
                response = response || {};
                this.props.navigator.push({
                    component: Notes,
                    title: 'Notes',
                    passProps: {
                        userInfo: this.props.userInfo,
                        notes: response
                    }
                })
            });
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
                <TouchableHighlight
                    onPress={this.goToProfile.bind(this)}
                    style={this.makeBackground(0)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}> View Profile </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.goToRepos.bind(this)}
                    style={this.makeBackground(1)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}> View Repositories </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.goToNotes.bind(this)}
                    style={this.makeBackground(2)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}> View Notes </Text>
                </TouchableHighlight>
            </View>
        )
    }
}


module.exports = Dashboard;
