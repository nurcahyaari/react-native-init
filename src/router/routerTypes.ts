/* eslint-disable no-unused-vars */
import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';

interface RouterType {
    id: string | number;
    name: string;
    component: any;
    options?: StackNavigationOptions | BottomTabBarOptions;
}

export interface RouterTypes extends Array<RouterType>{}
