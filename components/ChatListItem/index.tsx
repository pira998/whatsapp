import moment from 'moment';
import React from 'react'
import {View,Text,Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {ChatRoom} from '../../types';
import styles from './style';
import {useNavigation} from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom : ChatRoom;
}

const ChatListItem = (props:ChatListItemProps) => {
    const {chatRoom} = props
    const user = chatRoom.users[1];
    const navigation = useNavigation();

    const onClick=()=>{
        navigation.navigate("ChatRoom",{id:chatRoom.id,name:user.name})
    }
    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}> 
            <View style={styles.leftContainer}>
        <Image  style ={styles.avatar} source={{uri:user.imageUri}}/>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.upSideContainer}>
                      <Text style={styles.username}>{user.name}</Text>
                        <Text style={styles.createdAt}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>

                </View>
                    <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ChatListItem;