import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { inject, observer } from 'mobx-react'
import { sortByProperty, generateBadge} from "../helpers/helpers";
import Orientation from 'react-native-orientation';
import { format } from "date-fns";
import * as Progress from 'react-native-progress';


 const data = require('../data/data')
 const config_global = require("../config/global.json")
 
 

const Item = ({ item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <View style={styles.progress}>
      <Progress.Bar style={styles.progressBar} progress={0.3} height={30} width={null}/>
      <Text style={styles.progressText}>100 / 1250km</Text>
      <Icon
          raised
          style={styles.button}
          name='analytics'
          type='material'
          color='blue'
          size={30}
          onPress={() => console.log('hello')} />
    </View>
  </TouchableOpacity>
);

const Overview = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [sortType, setSortType] = useState('date');
  const [months, setMonths] = useState(null)

  useEffect(() =>{
    const sorted = sortByProperty(sortType, data.months)
    setMonths(sorted)
    Orientation.unlockAllOrientations();
  })

  function itemClick(item){
    setSelectedId(item.id)
    props.store.selectMonth(item.id)
  }

  const renderItem = ({item}) => {
    let selected = "black";
    let unselected = "white";

    //liefert Farbe vom Item zurück
    const getColor = (item) => {
    }

    getColor(item);
    const backgroundColor = item.id === selectedId ? selected : unselected;
    const color = item.id === selectedId ? 'white' : 'black';
  
      return (
      <Item
        item={item}
        onPress={() => itemClick(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={months}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 85,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  list: {
    flex: 1,
    marginRight: 10,
  },
  calendar: {
    width: wp('40%'),
    flex: 1,
    right: 15,
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
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  progress:{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
    borderRadius: 10,
  },
  progressBar:{
    flexGrow: 4
  },
  progressText:{
    fontSize: 22,
    paddingLeft: 20,
  },
  button: {
    paddingLeft: 20,
    shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
  },
  title: {
    fontSize: 22,
  },
});


export default inject('store')(observer(Overview));