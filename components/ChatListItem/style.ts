import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    avatar:{
        width:windowWidth/6,
        height:windowWidth/6,
        borderRadius:windowWidth/10,
        marginRight:10
    },
    container:{
        flex:1,
       justifyContent:"flex-start",
        alignSelf:"center",
        flexDirection:"row",
        width:"100%",
        padding:10,
        paddingBottom:0,
        marginRight:0
    

    },
    leftContainer:{
        flexDirection:'row',
    
    },
    upSideContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:0,width:"100%"
    },
    downSideContainer: {

    },
    rightContainer:{
        justifyContent:'space-between',
        borderBottomColor:"#E8E8E8",
        borderBottomWidth:1,
       
        width:windowWidth-windowWidth/4-20
        

      
    },
    username:{
        paddingTop:10,
        fontWeight:"bold",
        fontSize:16,
        alignSelf:"flex-start"
    },
    lastMessage:{
        paddingTop: 10,
        fontSize:16,
        color:'grey',
        paddingBottom:10,
        
    },
    createdAt:{
        alignSelf: "flex-end"

    }
});
export default styles