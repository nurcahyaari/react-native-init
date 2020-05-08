/* eslint-disable no-unused-vars */
import React from 'react';
import {
 TouchableOpacity, StyleSheet, TouchableOpacityProps, View, Text,
} from 'react-native';

interface PropsType extends TouchableOpacityProps{
  title?: string;
}

const CustomButton = (Props: PropsType) => {
  const { title, style, ...props } = Props;
  return (
    <TouchableOpacity
      {...props}
      style={{ ...style as {}, ...styles.Container }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
    },
});

export default CustomButton;
