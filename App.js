import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/home';
import Routes from './src/components/routes';  
import Searchroutes from './src/components/searchroutes';  
import Pickuppoint from './src/components/pickuppoint';  
import Rateus from './src/components/rateus';  
import PickuppointDetail from './src/components/pickuppointdetails';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false, 
                    }}
                />
                <Stack.Screen
                    name="routes"
                    component={Routes}
                />
                <Stack.Screen
                    name="searchroutes"
                    component={Searchroutes}
                    options={{
                        title: 'Search Routes', 
                        headerStyle: {
                            backgroundColor: '#00BDF2', 
                            opacity: 0.81, 
                        },
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                            fontWeight: '900', 
                            fontSize: 20, 
                        },
                    }}
                />
                <Stack.Screen
                    name="pickuppoint"
                    component={Pickuppoint}
                />
                <Stack.Screen
                    name="rateus"
                    component={Rateus}
                />
            </Stack.Navigator>
            <Stack.Screen
                name="PickuppointDetail"
                component={PickuppointDetail}
            />
        </NavigationContainer>
    );
};

export default App;
