// Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make header component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return(
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  }
};

// Make the component available to other parts of the App
export default Header;
