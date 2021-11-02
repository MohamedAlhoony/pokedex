import React from 'react';
import HomeScreen from './screens/home/home';
import PokimonDetailsScreen from './screens/pokimonDetails/pokimonDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
const Stack = createNativeStackNavigator();
const mapStateToProps = state => {
  return {};
};
const AppContainer = props => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={'HomeScreen'}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={'PokimonDetailsScreen'}
        component={PokimonDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default connect(mapStateToProps)(AppContainer);
