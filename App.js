import React from 'react';
import { Modal,FlatList, Pressable,Dimensions, Image,TextInput, SectionList, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

// const x = Platform.select({
//   ios:'ios',
//   android:'android',
//   web:'web',
// })
// console.log(x)
const Home = ()=>{
  const [data, setData] = React.useState([]);
  const {navigate} = useNavigation();
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(json => setData(json));
  //  console.log("data",data);
  return(
  <View style={{flex:1, backgroundColor:'white',}}>
    {/* <Text onPress={()=>navigate("prodDetails",{prodID:16})}> */}
    <Pressable
        style={[styles.button, styles.buttonOpen]}
         onPress={() => navigate("posts",{postsAll:data})}
      >
      <Text style={styles.textStyle}>GET POSTS</Text>
    </Pressable>
      {/* </Text> */}
  </View>);
}
const dimensions = Dimensions.get('window');

const Posts = ()=>{
  const imageHeight = Math.round(dimensions.width /2.5);
  const imageWidth = dimensions.width*0.75;
  const {navigate} = useNavigation();
  const {params: {postsAll}}=useRoute();
 // console.log("posts",postsAll)
  
  return(
  <View style={{flex:1, backgroundColor:'white'}}>
    
    <FlatList
        data={postsAll}
        shouldComponentUpdate
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item,index})=>
          <View style={{marginTop:10,}} >
            <Image
              style={{borderRadius:30,height: imageHeight, width: imageWidth,marginLeft:20,marginTop:20}}
              source={{uri: 'https://source.unsplash.com/random',}}
            />
            <Text onPress={() => navigate("Details",{post:item})} style={{marginLeft:20, fontWeight:'blod'}} >{item.title}</Text></View>}
      />
  </View>);}
const Header = ()=><Text style={styles.headerText}>BLOGPOST</Text>

const Profile = ()=>{
  const imageHeight = Math.round(dimensions.width /2);
  const imageWidth = dimensions.width;
  const profilePicPosY=imageWidth/2;
  const profilePicPosX=imageWidth/3.2;
  const profilePic=150;
  const [post, onChangeText] = React.useState('');
  // const {navigate} = useNavigation();
  return(<View 
      style={{flex:1, backgroundColor:'white'}}>
  <Header/>
            <Image
              style={{borderTopLeftRadius:10,borderTopRightRadius:10,height: imageHeight, width: imageWidth*0.95,margin:10,}}
              source={{uri: 'https://source.unsplash.com/random',}}
            />
            <Image
              style={{borderRadius:70, borderColor:'white', borderWidth:5, marginTop:profilePicPosY, marginLeft:profilePicPosX, position:'absolute',height: profilePic, width: profilePic,}}
              source={{uri: 'https://source.unsplash.com/random',}}
            />
            <Text style={{ marginTop:65,fontSize:20,fontWeight:'bold', marginLeft:imageWidth/2.8,}}>Fatma Elwasify </Text>
            <Text style={{color:'#990066', fontSize:12,marginLeft:imageWidth/2.2}}> <FontAwesome name="circle" size={10} color='#990066'/> online</Text>
           
            <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginTop:5}}/>
            
              <View style={{justifyContent: 'space-around', flexDirection:'row', marginTop:10}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize:15,}}>100</Text> 
                <Text style={{color:'black', fontWeight:'bold', fontSize:15,}}>500</Text>
                <Text style={{color:'black', fontWeight:'bold', fontSize:15,}}>200</Text>
              </View>
              <View style={{justifyContent: 'space-around', flexDirection:'row', marginLeft:10, marginBottom:10}}>
                <Text style={{color:'grey', fontWeight:'bold', fontSize:15,}}>Posts</Text> 
                <Text style={{color:'grey', fontWeight:'bold', fontSize:15, mrginLeft:20}}>Reacts</Text>
                <Text style={{color:'grey', fontWeight:'bold', fontSize:15,}}>Followers</Text>
              </View>
            <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, }}/>

            <View style={{flexDirection:'row',marginTop:10,marginBottom:10, justifyContent:'space-around'}}>
              <Image
                style={{borderRadius:70, marginLeft:10, height: 40, width: 40,}}
                source={{uri: 'https://source.unsplash.com/random',}}
              />
              <TextInput  placeholder="What's in your mind ..." style={styles.inputTxt} 
                {...{post,onChangeText}}/>
            
            </View >

            <ScrollView 
              style={{flex:1}}
              nestedScrollEnabled
              scrollEnabled
              contentContainerStyle={{}} >
            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
              
            <Pressable >
                <Text style={[styles.buttonPhotos, styles.buttonOpen]}><FontAwesome name="photo" size={15} color="white" /> Photos </Text>
            </Pressable>
            <Pressable >
                <Text style={[styles.buttonPhotos, styles.buttonOpen]}><FontAwesome name="music" size={15} color="white" /> Music </Text>
            </Pressable>
            <Pressable >
                <Text style={[styles.buttonPhotos, styles.buttonOpen]}><FontAwesome name="star" size={15} color="white" /> intersts </Text>
            </Pressable>
            </View>
            <View style={styles.postShadow}>
              <View style={{flexDirection:'row',marginTop:10, marginBottom:10}}>
              <Image
                style={{borderRadius:70, marginLeft:10, height: 35, width: 35,}}
                source={{uri: 'https://source.unsplash.com/random',}}
              />
                <Text style={{color:'black', fontWeight:'bold', fontSize:18, marginTop:4,marginLeft:10,}}>Fatma Elwasify</Text>
              </View>
              <Text style={{color:'grey',marginLeft:55, marginTop:-10, fontSize:12}}>2h <FontAwesome name="users" size={10} color="grey" /></Text>
              <Text style={{color:'black',marginLeft:10, marginTop:5,marginBottom:5, fontSize:14}}>You can't crush a soul here, that's what life on earth is for 🖤</Text>
              <Image
                style={{marginLeft:10, height: 300, marginBottom:10, width: imageWidth*0.9,}}
                source={{uri: 'https://source.unsplash.com/random',}}
              />
              <View style={{flexDirection:'row',marginBottom:10,}}> 
                <Text style={{color: 'darkgrey', fontSize:15, marginLeft:20}}> <FontAwesome name="heart" size={15} color="#990066" />Fatma Elzahraa and 10 others</Text>
              </View>
              <View style={{ borderBottomColor: 'lightgrey', marginBottom:10,marginLeft:5,marginRight:5, borderBottomWidth: 1, }}/>
              <View style={{flexDirection:'row',justifyContent: 'space-around',marginBottom:10,}}>
                 <Text style={{color: 'darkgrey', fontSize:20, marginLeft:20}}> <FontAwesome name="heart" size={20} color="#990066" />Love</Text>
                 <Text style={{color: 'darkgrey', fontSize:20, marginLeft:20}}> <FontAwesome name="comment" size={20} color="grey" />Comment</Text>
              </View>
            </View>

            
            <View style={styles.postShadow}>
              <View style={{flexDirection:'row',marginTop:10, marginBottom:10}}>
              <Image
                style={{borderRadius:70, marginLeft:10, height: 35, width: 35,}}
                source={{uri: 'https://source.unsplash.com/random',}}
              />
                <Text style={{color:'black', fontWeight:'bold', fontSize:18, marginTop:4,marginLeft:10,}}>Fatma Elwasify</Text>
              </View>
              <Text style={{color:'grey',marginLeft:55, marginTop:-10, fontSize:12}}>2h <FontAwesome name="users" size={10} color="grey" /></Text>
              <Text style={{color:'black',marginLeft:10, marginTop:5,marginBottom:5, fontSize:14}}>You can't crush a soul here, that's what life on earth is for 🖤</Text>
              <Image
                style={{marginLeft:10, height: 300, marginBottom:10, width: imageWidth*0.9,}}
                source={{uri: 'https://source.unsplash.com/random',}}
              />
              <View style={{flexDirection:'row',marginBottom:10,}}> 
                <Text style={{color: 'darkgrey', fontSize:15, marginLeft:20}}> <FontAwesome name="heart" size={15} color="#990066" />Fatma Elzahraa and 10 others</Text>
              </View>
              <View style={{ borderBottomColor: 'lightgrey', marginBottom:10,marginLeft:5,marginRight:5, borderBottomWidth: 1, }}/>
              <View style={{flexDirection:'row',justifyContent: 'space-around',marginBottom:10,}}>
                 <Text style={{color: 'darkgrey', fontSize:20, marginLeft:20}}> <FontAwesome name="heart" size={20} color="grey" />Love</Text>
                 <Text style={{color: 'darkgrey', fontSize:20, marginLeft:20}}> <FontAwesome name="comment" size={20} color="grey" />Comment</Text>
              </View>
            </View>
            
          </ScrollView>
  
  </View>)}

const Details = ()=>{
  
  const imageHeight = Math.round(dimensions.width *0.95);
  const imageWidth = dimensions.width*0.8;
  const {params: {post}}=useRoute();
  
  return(
    <ScrollView 
    style={{flex:1}}
    nestedScrollEnabled
    scrollEnabled
    contentContainerStyle={{}}
    >
  <View style={{flex:1, backgroundColor:'white'}}>
    <Image
              style={{borderRadius:30,height: imageHeight, width: imageWidth,marginTop:20,marginLeft:35,}}
              source={{uri: 'https://source.unsplash.com/random',}}
            />
            <Text style={{marginLeft:30, marginTop:15,fontSize: 20, fontFamily: "monospace", fontWeight:'bold',}} > {post.title}</Text>
            <Text style={{marginLeft:30, marginTop:30,fontSize: 20}} > {post.body}</Text>
            
  </View>
  </ScrollView>);}



const HomeStack = () =>{
  const {goBack} = useNavigation();
  return(
  
  <StackNavigator
  screenOptions={{
    // header:()=><Text>hue</Text>,
    headerStyle:{backgroundColor:'#990066', color:'white'},
    headerTitle:'BLOGPOST',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

    headerTintColor: 'white',
    //  headerLift: ()=><Text onPress={()=>goBack()} style={{color:'white'}}>back</Text>,
     headerLeft: ()=><Text onPress={()=>goBack()} style={{color:'white',marginLeft:20,fontWeight:'bold'}}><FontAwesome name="arrow-left" size={20} color='white'/>back</Text>
    }} >
      <StackScreen name="home"
        component={Home} />

      <StackScreen name="posts"
        component={Posts}/>

       <StackScreen name="Details"
        component={Details}/>

  </StackNavigator>
)}
const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

export default function App() {
  //const [modalVisible, setModalVisible] = React.useState(false);
  
  return (
       <NavigationContainer>
        <TabNavigator
          initialRouteName="home"
          tabBarOptions={{
            labelStyle: {
              fontSize: 20,
              fontWeight:'bold',
            },
            activeTintColor:'#660066',
            inactiveTintColor:'white',
            tabStyle:{backgroundColor: '#990066',}
          }}
          >
            
          <TabScreen
            name="homeStack" 
            component={HomeStack}
            options={{
              title:'Home',
              // labelStyle:{color:'white'},
              tabBarIcon:({color})=><FontAwesome name="home" size={20} style={{marginTop:10}} color={color}/>
            }}
            />
          <TabScreen name="profile" component={Profile}
          options={{
            title:'Profile',
            // headerStyle:{backgroundColor:'#990066', color:'white'},
            // headerTitle:'BLOGPOST',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            // headerTintColor: 'white',
            // labelStyle:{color:'white', fontSize:20},
            tabBarIcon:({color})=><FontAwesome name="user" size={20} style={{marginTop:10}} color={color}/>
          }}/>
          {/* <TabScreen name="settings" component={Settings}/> */}
        </TabNavigator>
      </NavigationContainer>
    // <View style={styles.container}>
      
    //   <Modal
    //     animationType="slide"
    //     transparent={true}
    //     visible={modalVisible}
    //     onRequestClose={() => {
    //       Alert.alert("Modal has been closed.");
    //       setModalVisible(!modalVisible);
    //     }}
    //   >
    //   <View style={styles.centeredView}>
    //       <View style={styles.modalView}>
    //         <Text style={styles.modalText}>Hello World!</Text>
    //         <Pressable
    //           style={[styles.button, styles.buttonClose]}
    //           onPress={() => setModalVisible(!modalVisible)}
    //         >
    //           <Text style={styles.textStyle}>Hide Modal</Text>
    //         </Pressable>
    //       </View>
    //     </View>
    //   </Modal>
    //   <Pressable
    //     style={[styles.button, styles.buttonOpen]}
    //     onPress={() => setModalVisible(true)}
    //   >
    //     <Text style={styles.textStyle}>Show Modal</Text>
    //   </Pressable>
    //   <SectionList
    //     sections= {[
    //       {title:'Mobile', data:['iPhone x','iPhone 12']},
    //       {title:'Laptops', data:['hp','mac']},
    //     ]}
    //     ListHeaderComponent={<View><Text>big header</Text></View>}
    //     renderItem={({item})=><View><Text>{item}</Text></View>}
    //     renderSectionHeader={({section:{title}})=><View><Text style={{color:'red'}}>{title}</Text></View>}
    //     />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  headerText:{
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"sans-serif",
    backgroundColor:'#990066', color:'white',
    padding:20,
    fontWeight: 'bold',
  },
  inputTxt:{
    textAlign: 'left',
  
    height:40,
    borderWidth:1,
    borderColor:'lightgrey',
    backgroundColor:'white',
    borderRadius: 20,
    paddingLeft:10,
    paddingRight:135,
  },
  postShadow:{
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    // shadowColor: "#000",
    // shadowOffset: {
	  //   width: 0,
	  //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  // modal:{
  //   flex:1,
  //   justifyContent:'center',
  //   alignContent:'center',
  //   alignItems:'center',
  // },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft:70,
    marginRight:70,
    marginTop:150,
  },
  buttonPhotos: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // marginLeft:10,
    // marginRight:270,
    marginTop:10,
    color:'white'
  },
  buttonOpen: {
    backgroundColor: "#990066",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
