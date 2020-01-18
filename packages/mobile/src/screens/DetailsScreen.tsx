import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
            title="Stay in Details"
            onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}

export default DetailsScreen;