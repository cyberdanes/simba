import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

const Contacts = () => {
    return (
        <View>
            <Text>Hi From Contacts</Text>
        </View>
    );
};

const ContactDetails = () => {
    return (
        <View>
            <Text>Hi From Contact Details</Text>
        </View>
    );
};

const CreateContacts = () => {
    return (
        <View>
            <Text>Hi From Create Contacts</Text>
        </View>
    );
};

const Settings = () => {
    return (
        <View>
            <Text>Hi From Settings</Text>
        </View>
    );
};

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name="Contact Details" component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name="Create Contact" component={CreateContacts}></HomeStack.Screen>
            <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;