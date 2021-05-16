import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Store from '../screens/store';
import wasteDetails from '../screens/wasteDetails';
import ProductDetails from '../screens/productDetails';

import React from 'react';
import Header from '../shared/header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='WasteIT' navigation={navigation} />
            }
        }
      },
      wasteDetails:{
          screen: wasteDetails,
          navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='Details' navigation={navigation} />
            }
          }
        
      },
      Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='Profile' navigation={navigation} />
            }
        }
      },
      Store:{
        screen: Store,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='WasteIT Store' navigation={navigation} />
            }
        }
      },
      ProductDetails:{
        screen: ProductDetails,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='WasteIT Store' navigation={navigation} />
            }
        }
      },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 }
    }
  });
  
  export default createAppContainer(HomeStack);