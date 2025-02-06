import React, {useState}from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Morning = [
  {
    id: '1',
    title: 'Wake-Up and Refresh',
    color: "#F8F5E9",
  },
  {
    id: '2',
    title: 'Wake up and stretch',
     color: "#DF6D14",
  },
  {
    id: '3',
    title: 'Drink a glass of water',
     color: "#3A7D44",
  },
    {
    id: '4',
    title: 'Brush your teeth and wash your face',
    color: "#F7CFD8", 
  },
  {
    id: '5',
    title: 'Prepare and eat a healthy breakfast',
    color: "#FFEFC8",
  },
    {
    id: '6',
    title: 'Review your schedule and set priorities',
    color: "#3674B5",
  },
  {
    id: '7',
    title: 'Check and respond to urgent emails/messages',
    color: "#D70654",
  },
    {
    id: '8',
    title: 'Attend any scheduled meetings or classes',
    color: "#497D74",
  },
  {
    id: '9',
    title: 'Focus on the most important task for the day',
    color: "#B8D576",
  },
    {
    id: '10',
    title: 'Third Item',
  },
];

const Afternoon = [
  {
    id: '1',
    title: 'Wake-Up and Refresh',
    color: "#F8F5E9",
  },
  {
    id: '2',
    title: 'Wake up and stretch',
     color: "#DF6D14",
  },
  {
    id: '3',
    title: 'Drink a glass of water',
     color: "#3A7D44",
  },
    {
    id: '4',
    title: 'Brush your teeth and wash your face',
    color: "#F7CFD8",
  },
  {
    id: '5',
    title: 'Prepare and eat a healthy breakfast',
    color: "#FFEFC8",
  },
    {
    id: '6',
    title: 'Review your schedule and set priorities',
    color: "#3674B5",
  },
  {
    id: '7',
    title: 'Check and respond to urgent emails/messages',
    color: "#D70654",
  },
    {
    id: '8',
    title: 'Attend any scheduled meetings or classes',
    color: "#497D74",
  },
  {
    id: '9',
    title: 'Focus on the most important task for the day',
    color: "#B8D576",
  },
    {
    id: '10',
    title: 'Third Item',
  },
];

const Evening = [
  {
    id: '1',
    title: 'Wake-Up and Refresh',
    color: "#F8F5E9",
  },
  {
    id: '2',
    title: 'Wake up and stretch',
     color: "#DF6D14",
  },
  {
    id: '3',
    title: 'Drink a glass of water',
     color: "#3A7D44",
  },
    {
    id: '4',
    title: 'Brush your teeth and wash your face',
    color: "#F7CFD8",
  },
  {
    id: '5',
    title: 'Prepare and eat a healthy breakfast',
    color: "#FFEFC8",
  },
  
];

const Item = ({title, color}) => (
 <View style={[styles.item, { backgroundColor: color }]}>
    <TouchableOpacity>
      <Text style={styles.title === color ? "#DDEB9D" : ""}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text style={styles.textStyle}>Morning</Text>
      <FlatList
        data={Morning}
        renderItem={({item}) => <Item title={item.title} color={item.color}/>}
        keyExtractor={item => item.id}
        
      />
   
      <Text style={styles.textStyle}>Afternoon</Text>
       <FlatList
        data={Afternoon}
        renderItem={({item}) => <Item title={item.title}  color={item.color }/>}
        keyExtractor={item => item.id}
      />
      <Text style={styles.textStyle}>Evening</Text>
       <FlatList
        data={Evening}
        renderItem={({item}) => <Item title={item.title} color={item.color} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
  title: {
    fontSize: 32,
  },
});

export default App;