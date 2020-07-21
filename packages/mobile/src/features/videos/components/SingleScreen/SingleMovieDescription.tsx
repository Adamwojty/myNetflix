import React from 'react';
import {View } from 'react-native';
import MainDescription from './MainDescription';

interface SingleMovieDescriptionP {
  navigation: any
}

export default class SingleMovieDescription extends React.Component <SingleMovieDescriptionP>{
 
  render() {
    return (
      <MainDescription 
        title="Docker od podstaw"
        autor="Przemysław Bykowski"
        description="Interdum et malesuada fames ac ante ipsum primis in faucibus. In sed tristique ante, vitae eleifend erat. Curabitur euismod eros nec tincidunt molestie. Donec maximus, nunc ut dapibus aliquet, lacus nisl rhoncus nisi, ac cursus urna nibh id enim. Morbi a rutrum dolor. Aliquam quis massa est. Pellentesque eget urna in justo ornare pellentesque."
        navigation={this.props.navigation}
      />
    );
  }
}
