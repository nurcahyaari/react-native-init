/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import colors from '../colors';

const CustomTextInput = (props:TextInputProps) => {
    const [isFocus, setIsFocuer] = useState(false);


    return (
      <TextInput
        style={styles.TextInput}
        {...props}
        underlineColorAndroid={colors.black}
      />
      );
};

const styles = StyleSheet.create({
    TextInput: {
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
    },
});

export default CustomTextInput;
