import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Dry Waste', pickup: 'Bi-weekly', cost:100, quantity:"per kg", body: 'Paper, plastics, metal, glass, rubber, thermocol, Styrofoam, fabric, leather, rexine, wood – anything that can be kept for an extended period without decomposing.(Note:-Do not collect in Plastic bags)', key: '1' },
    { title: 'Wet Waste', pickup: 'Daily', cost:25, quantity:"per day", body: 'Wet waste consists of kitchen waste – including vegetable and fruit peels and pieces, tea leaves, coffee grounds, eggshells, bones and entrails, fish scales, as well as cooked food (both veg and non-veg).', key: '2' },
    { title: 'E-Waste', pickup: 'Monthy', cost:200, quantity:"per kg", body: 'E-waste or electronic waste consists of batteries, computer parts, wires, electrical equipment of any kind, electrical and electronic toys, remotes, watches, cellphones, as well as bulbs, tubelights and CFLs.', key: '3' },
    { title: 'Garden Waste', pickup: 'Weekly', cost:50, quantity:"per Kg", body: 'Any organic waste that can be composted. It can be any organic waste that can be composted', key: '4' },
    { title: 'Sanitary Waste', pickup: 'Daily', cost:40, quantity:"per day", body: 'This includes used menstrual clothes, sanitary napkins, disposable diapers, bandages and any material that is contaminated with blood or other body fluids.', key: '5' },
    { title: 'Debris', pickup: 'On Demand', cost:300, quantity:"per kg", body: 'waste debris from destruction of buildings, roads, bridges, or other structures. This includes dust, concrete, wood products, asphalt shingles, brick and clay tile, steel, and drywall.', key: '6' },
    
  ]);

  const pressHandler = () => {
    //navigation.navigate('Store');
    navigation.push('Store');
  }
  const pressHandler2 = () => {
    //navigation.navigate('Profile');
    navigation.push('Profile');
  }

  return (
    <View style={globalStyles.container,styles.screen}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 } onPress={pressHandler}>
          <Text style={styles.TextStyle}> Your Reward Points </Text>
          <Text style={styles.TextStyle}>// display points here//</Text>
          <Text style={styles.TextStyle}>On Touch, Moves to Store/</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 } onPress={pressHandler2}>
          <Text style={styles.TextStyle}> Profile </Text>
      </TouchableOpacity>

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('wasteDetails', item)}>
          <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  SubmitButtonStyle: {
 
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor:'#00BCD4',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
 
  TextStyle:{
      textAlign:'center',
  }
 
});