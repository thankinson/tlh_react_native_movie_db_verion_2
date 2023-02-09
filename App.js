import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // imports the Ionicans libray of useable images.

import MovieContextProvider from './store/movie-context';

import MovieCollectionScreen from './screens/MovieCollectionScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import MovieSearchScreen from './screens/MovieSearchScreen';
import { useEffect, useState } from 'react';
import { init } from './utils/database';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator(){
  return (
   <BottomTab.Navigator>
     <BottomTab.Screen 
      name="MovieSearchScreen" 
      component={MovieSearchScreen} 
      options={{
        title: 'Movie Search',
        tabBarIcon: ({color, size }) => (
          <Ionicons name='search' size={size} color={color} />
        )
      }}
      />
     <BottomTab.Screen 
      name="MovieCollectionScreen" 
      component={MovieCollectionScreen}
      options={{
        title: 'The Collection',
        tabBarIcon: ({color, size }) => (
          <Ionicons name='film-outline' size={size} color={color} />
        )
      }}/>
   </BottomTab.Navigator>
   )
 }
export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);
  useEffect(()=> {
    init().then(()=>{
      setDbInitialized(true)
    }).catch((err)=>{
      console.log(err)
    })
  })

  return (
    <>
    <StatusBar style='light'/>
    <MovieContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='BottomTabNavigator' 
            component={BottomTabNavigator} 
            options={{ headerShown: false }}
            />
          <Stack.Screen 
            name='MovieDetailsScreen' 
            component={MovieDetailsScreen} 
            options={{ headerShown: false }}

            />
            
        </Stack.Navigator>
      </NavigationContainer>
    </MovieContextProvider> 
    </>
  )
}