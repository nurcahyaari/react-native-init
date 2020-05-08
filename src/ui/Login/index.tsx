/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {
 StyleSheet, Text, ScrollView,
} from 'react-native';

// redux
import { useDispatch, useSelector } from 'react-redux';

// import customer elements
import colors from '../../components/colors';
import {
  TextInput,
  Button,
  SizedBox,
} from '../../components/atoms';

// import action creators
import { SetEmail, SetPassword, LoginAsync } from '../../modules/redux/auth/auth.action';

const Login = () => {
  const email = useSelector((state:any) => state.auth.user.email);
  const password = useSelector((state:any) => state.auth.user.password);
  const dispatch = useDispatch();

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text
        style={style.Loginheader}
      >
        Login
      </Text>
      <SizedBox margin={20} />
      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(value) => {
          dispatch(SetEmail(value));
        }}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(value) => dispatch(SetPassword(value))}
        value={password}
        autoCapitalize="none"
      />
      <SizedBox margin={7} />
      <Button
        onPress={() => {
          dispatch(LoginAsync(email, password));
        }}
        style={{ backgroundColor: colors.primary }}
        title="Login"
      />
      <SizedBox margin={50} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  Loginheader: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
});

export default Login;
