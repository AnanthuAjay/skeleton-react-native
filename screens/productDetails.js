import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ProductDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>{ navigation.getParam('title') }</Text>
      <Text>Cost :{ navigation.getParam('cost') }</Text>
      <Text>Quantity :{ navigation.getParam('quantity') }</Text>
      <Text>Contains :{ navigation.getParam('body') }</Text>
      </Card>
    </View>
  );
}