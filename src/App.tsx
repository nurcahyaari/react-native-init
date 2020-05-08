/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  View,
  Modal,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

// import react navigations
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import navigation routes
import { StackRoutes } from './router';

// import localstorage
// import Storage from './utils/storage/index';

const Stack = createStackNavigator();

const App = () => {
  // configure redux
  const Token:string = useSelector((state:any) => state.auth.auth.key.token);
  const IsLoading: boolean = useSelector((state: any) => state.loading.isLoading);
  console.log('Isloading : ', IsLoading);
  console.log('token: ', Token);
  function renderLoginRoutes() {
    return (
      <NavigationContainer>
        <Modal transparent animationType="fade" visible={IsLoading}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" />
          </View>
        </Modal>
        <Stack.Navigator>
          {
            StackRoutes.public.map((data) => (
              <Stack.Screen
                key={data.id}
                name={data.name}
                component={data.component}
                options={data.options}
              />
            ))
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  function renderLogedinRoutes() {
    return (
      <NavigationContainer>
        <Modal transparent animationType="fade" visible={IsLoading}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" />
          </View>
        </Modal>
        <Stack.Navigator
          initialRouteName="Dashboard"
        >
          {
            StackRoutes.private.map((data) => (
              <Stack.Screen
                key={data.id}
                name={data.name}
                component={data.component}
                options={data.options}
              />
            ))
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return Token.length > 0 ? renderLogedinRoutes() : renderLoginRoutes();
};

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  modalContainer: {
    alignContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
