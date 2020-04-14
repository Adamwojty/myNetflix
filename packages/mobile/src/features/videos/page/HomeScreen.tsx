import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationName } from '../../../config/routing/NavigationName';
import { NavProps } from '../../../config/routing/ParamList';

declare var global: {HermesInternal: null | {}};

export const HomeScreen = ({ 
  navigation,
  route 
}: NavProps<NavigationName.HOME> ) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
             {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Text>Buttons to Exaples</Text>
                <Button
                    color="#e63900"
                    title="Go to SingleMovie"
                    onPress={() => navigation.navigate(NavigationName.SINGLEMOVIE)}
                />
                 <Button
                    color="#e63900"
                    title="Go to MovieList"
                    onPress={() => navigation.navigate(NavigationName.MOVIELIST)}
                />
                <Button
                    color="#e63900"
                    title="Go to SignIn"
                    onPress={() => navigation.navigate(NavigationName.SIGNINSCREEN)}
                />
                  <Button
                    color="#e63900"
                    title="Go to SignUp"
                    onPress={() => navigation.navigate(NavigationName.SINGUP)}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeScreen;