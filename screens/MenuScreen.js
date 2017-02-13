import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuHeader from '../components/MenuHeader';
import LinkToExample from '../components/LinkToExample';

class MenuScreen extends React.Component {
  constructor(props) {
    super(props);

    this.goToStackNavigationExample = this.goToStackNavigationExample.bind(this);
    this.goToTabNavigationExample = this.goToTabNavigationExample.bind(this);
    this.goToDrawerNavigationExample = this.goToDrawerNavigationExample.bind(this);
  }

  goToStackNavigationExample() {
    this.props.navigation.navigate('StackExample');
  }

  goToTabNavigationExample() {
    this.props.navigation.navigate('TabExample');
  }

  goToDrawerNavigationExample() {
    this.props.navigation.navigate('DrawerExample');
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader />

        <LinkToExample
          title={'Stack navigation example'}
          color={'#3498db'}
          onPress={this.goToStackNavigationExample}
        />

        <LinkToExample
          title={'Tab navigation example'}
          color={'#2ecc71'}
          onPress={this.goToTabNavigationExample}
        />

        <LinkToExample
          title={'Drawer navigation example'}
          color={'#e74c3c'}
          onPress={this.goToDrawerNavigationExample}
        />
      </View>
    );
  }
}

MenuScreen.navigationOptions = {
  title: 'Menu'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 15,
    borderColor: '#242134'
  }
});

export default MenuScreen;
