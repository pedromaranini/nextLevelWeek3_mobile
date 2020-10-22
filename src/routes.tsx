import React from 'react';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();



export default function Rotues() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap} 
                />

                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails} 
                />
            </Navigator>
        </NavigationContainer>
    );
}