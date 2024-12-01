import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/home';
import Routes from './src/components/routes';
import Searchroutes from './src/components/searchroutes';
import Pickuppoint from './src/components/pickuppoint';
import Rateus from './src/components/rateus';
import PickuppointDetail from './src/components/pickuppointdetails';
import RouteDetails from './src/components/busroutesdetails';
import Routespickupdetails from './src/components/routespickupdetails';

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
                    options={{
                        title: 'Bus Routes',
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
                    name="RouteDetails"
                    component={RouteDetails}
                    options={({ route }) => ({
                        title: `${route.params.routeNo}`,
                        headerStyle: {
                            backgroundColor: '#00BDF2',
                            opacity: 0.81,
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: '900',
                            fontSize: 20, // Increased font size for the title in RouteDetails screen
                        },
                    })}
                />
                <Stack.Screen
                    name="Routespickupdetails"
                    component={Routespickupdetails}
                    options={{
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
                    options={{
                        title: 'Pickup Point',
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
                    name="rateus"
                    component={Rateus}
                />
                <Stack.Screen
                    name="PickuppointDetail"
                    component={PickuppointDetail}
                    options={({ route }) => ({
                        title: route.params?.pointName || 'Pickup Point Details',
                        headerStyle: {
                            backgroundColor: '#00BDF2',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: '900',
                            fontSize: 20,
                        },
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
