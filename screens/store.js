import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Store({ navigation }) {
  const pressHandler = () => {
        navigation.goBack();
      }
  const [reviews, setReviews] = useState([
    { title: 'Plastic Toy', cost:100, quantity:"per piece", body: 'loreum iposum', key: '1' },
    { title: 'Wet Waste', cost:25, quantity:"per day", body: 'loreum iposum', key: '2' },
    { title: 'Compost', cost:200, quantity:"per kg", body: 'E-waste or electronic waste consists of batteries, computer parts, wires, electrical equipment of any kind, electrical and electronic toys, remotes, watches, cellphones, as well as bulbs, tubelights and CFLs.', key: '3' },
    { title: 'Indoor plant', cost:50, quantity:"per Kg", body: 'Any organic waste that can be composted. It can be any organic waste that can be composted', key: '4' },
    { title: 'Artifact', cost:40, quantity:"per day", body: 'This includes used menstrual clothes, sanitary napkins, disposable diapers, bandages and any material that is contaminated with blood or other body fluids.', key: '5' },
    ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Store Screen</Text>
      <Button title='Dashboard' onPress={pressHandler} />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('productDetails', item)}>
          <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>

       )} />
    </View>
  );
}