import React from 'react';
import { View } from 'react-native';

interface PropsType {
    margin: number;
}

const SizedBox = (props:PropsType) => {
    const { margin } = props;
    return <View style={{ margin }} />;
};

export default SizedBox;
