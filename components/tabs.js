import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Overview from './overview';

const Tab = createBottomTabNavigator();
const config_global = require("../config/global.json")


const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 20,
                left: 15,
                right: 15,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 10,
                height: 95,
                ...styles.shadow
            }
        }}>
      <Tab.Screen name="Monate" component={Overview} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', width: 150}}> 
                <Icon name="list" color={focused ? config_global.color_primary : '#748c94'} size={35} iconStyle={{
                    width: 25,
                    height: 25
                }}/>
                <Text style={{color: focused ? config_global.color_primary : '#748c94', fontSize: 18}}>Monate</Text>
            </View>
          ),
      }} />
      <Tab.Screen name="Zusammenfassung" component={Overview} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', width: 150}}>
                <Icon name="euro" color={focused ? config_global.color_primary : '#748c94'} size={35} iconStyle={{
                    width: 25,
                    height: 25
                }}/>
                <Text style={{color: focused ? config_global.color_primary : '#748c94', fontSize: 18}}>Report</Text>
            </View>
          ),
      }} />
      <Tab.Screen name="Status" component={Overview} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', width: 150}}>
                <Icon name="time-to-leave" color={focused ? config_global.color_primary : '#748c94'} size={35} iconStyle={{
                    width: 25,
                    height: 25
                }}/>
                <Text style={{color: focused ? config_global.color_primary : '#748c94', fontSize: 18}}>Status</Text>
            </View>
          ),
      }} />
      <Tab.Screen name="Fernsteuerung" component={Overview} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', width: 150}}>
                <Icon name="settings" color={focused ? config_global.color_primary : '#748c94'} size={35} iconStyle={{
                    width: 25,
                    height: 25
                }}/>
                <Text style={{color: focused ? config_global.color_primary : '#748c94', fontSize: 18}}>Fernsteuerung</Text>
            </View>
          ),
      }} />
      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs