import { StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [value, setValue] = React.useState('1')

  const array1 = [1, 4, 9, 16];

  const add = (test:string) => {
    console.log(test)
  }

// pass a function to map

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>test #1</Text>
      <Text style={styles.title}>test #2</Text>
      <Text style={styles.title}>test #3</Text>
      <Text style={styles.title}>test #4</Text>
      {array1.map(val => {
        return <Text>{val}</Text>
      })}
      <TouchableOpacity onPress={() => add('2')}>
        <Text style={styles.title}>Tab {value}</Text>
      </TouchableOpacity>
      <TextInput
        style={{borderWidth: 1, borderColor: 'black', height: 30, width:200}}
        onChangeText={setValue}
        value={value}
        placeholder="useless placeholder"
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
