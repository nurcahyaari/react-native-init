import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

// import custom components
import { Button } from '../../components/atoms';

// import reducer
import { Logout } from '../../modules/redux/auth/auth.action';
import colors from '../../components/colors';

const Dashboard = () => {
    const dispatch = useDispatch();
    return (
      <>
        <Text>Dashboard</Text>
        <Button
          style={{ backgroundColor: colors.primary }}
          onPress={() => {
            dispatch(Logout());
          }}
          title="Logout"
        />
      </>
    );
};

export default Dashboard;
