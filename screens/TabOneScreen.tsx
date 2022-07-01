import { StyleSheet, TouchableOpacity, TextInput, Button, Alert, SafeAreaView, ScrollView, FlatList, SectionList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import React, { useState } from 'react';

const inputArray = [''];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [InputData, setInputData] = React.useState('')
  
  const addInputToArray = () =>{

    inputArray.push(InputData.toString());
    //Alert.alert('Item added');
    console.log(inputArray);
  }

  const Divider = () => {

    return (
      <View style={{
        height: 1,
        width: "100%",
        backgroundColor: 'black',
      }} />
    );
  }

  const Show_Selected_Item = (selected_item) => {
    Alert.alert(selected_item);
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Add an item to the list</Text>
      
      <TextInput placeholder='What do you want to add?'
      onChangeText={setInputData}
      style={styleSheet.textInput}
      />

      <Button onPress={addInputToArray}
         title={'Add'}
      />
      
      <View style={styles.separator} lightColor="black" darkColor="rgba(255,255,255,0.1)">
      
      </View>

      <View style={styleSheet.MainContainer}>
        <ScrollView>
          {
            inputArray.map((item) => (
              <TouchableOpacity onPress={() => Show_Selected_Item(item)}>
                <Text style={styles.title}>Task = {item}</Text>
                <Divider />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    </View>

  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
});

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text:{
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20
  },

  textInput: {
    textAlign: 'center',
    marginBottom: 20,
    height: 44,
    width: '88%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
  }
})
