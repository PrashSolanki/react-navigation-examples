import React from 'react';
import { View, StyleSheet } from 'react-native';
import FooComponent from '../../components/drawer/FooComponent';

class FooScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FooComponent text={'This is another screen, on 2nd drawer option!'} />
      </View>
    );
  }
}

FooScreen.navigationOptions = {
  // title: 'Drawer2'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 255, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});

export default FooScreen;