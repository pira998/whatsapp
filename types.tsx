export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  ChatsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type MainTabParamList = {
  Camera:undefined,
  Chats:undefined;
  Status:undefined;
  Calls:undefined
}
export type User = {
  id: String;
  name:String;
  imageUri:String;

}
export type Message ={
  id:String;
  content:string;
  createdAt:string;
}
export type ChatRoom ={
  id:String;
  users:[User];
  lastMessage:Message;

}