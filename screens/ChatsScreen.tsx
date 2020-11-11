import * as React from 'react';
import { FlatList,StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import ChatListItem from '../components/ChatListItem'
import chatRooms from '../data/ChatRooms'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <FlatList 
          data = {chatRooms}
          renderItem ={({item})=><ChatListItem chatRoom={item}/>}
          showsVerticalScrollIndicator={false}
        />
          
        {/* <ChatListItem chatRoom={chatRooms[0]}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
