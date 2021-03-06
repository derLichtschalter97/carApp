import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { inject, observer } from 'mobx-react'
import { sortByProperty, calculateKM, calculateOver} from "../helpers/helpers";
import Orientation from 'react-native-orientation';
import { format } from "date-fns";
import * as Progress from 'react-native-progress';


 const data = require('../data/data')
 const settings = require('../data/settings')
 const config_global = require("../config/global.json")
 
 

const Item = ({ item, onPress, backgroundColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={styles.title}>{item.name}</Text>
    <View style={styles.progress}>
      <Progress.Bar style={styles.progressBar} progress={item.percent} height={30} width={null}/>
      <Text style={styles.progressText}>{item.drived} / {settings.global.monthlyKM}km</Text>
      <Icon
          raised
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
    let daten = sortByProperty(sortType, data.months)
    daten = calculateKM(daten, data.days)
    daten = calculateOver(daten, settings.global.monthlyKM)
    setMonths(daten)
    Orientation.unlockAllOrientations();
  })

  function itemClick(item){
    setSelectedId(item.id)
    props.store.selectMonth(item.id)
  }

  const renderItem = ({item}) => {
    let backgroundColor = "#88B04B";

    //liefert Farbe vom Item zurück
    const getColor = (item) => {
      if(item.over !== 0){
        backgroundColor = "#FF6F61"
      }
    }

    getColor(item);
  
      return (
      <Item
        item={item}
        onPress={() => itemClick(item)}
        backgroundColor={{backgroundColor}}
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
    padding: 5,
    backgroundColor: "white",
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
    paddingRight: 20,
  },
  button: {
    paddingLeft: 30,
  },
  title: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 22,
    fontStyle: "bold"
  },
});


export default inject('store')(observer(Overview));