import React from 'react';
import {
    StyleSheet, View, Image, Text, FlatList,TouchableOpacity,
} from 'react-native';
import * as images from '../image/map';
import { moderateScale } from '../common/common';
// const image = { uri: "https://reactjs.org/logo-og.png" };
const Tag = "list =>";
class list extends React.Component {
   
    constructor() {
        super();
        this.state = {
            data: [

                
                {
                    "name": "Seminyak   ",
                    "add": "Bali",
                    "photo": images.resto,
                   
                },
                {
                    "name": "Seminyak   ",
                    "add": "Bali",
                    "photo": images.resto,
                   
                },
                {
                    "name": "Seminyak   ",
                    "add": "Bali",
                    "photo": images.resto,
                   
                },
                {
                    "name": "Seminyak   ",
                    "add": "Bali",
                    "photo": images.resto,
                   
                },
                {
                    "name": "Seminyak   ",
                    "add": "Bali",
                    "photo": images.resto,
                   
                },
                {
                    "name": "Seminyak   ",
                    "add": "Bali",
                    "photo": images.resto,
                   
                },
                {
                    "name": "Seminyak   ",
                    "add": "Bali",
                    "photo": images.resto,
                   
                },
                


            ]
        }
    }
    renderCard = (item) => {
        return (
            <View style={styles.vmCardStyle}>
                <View style={styles.vmSubCardStyle}>

                    <View style={styles.vmSub1}>
                        <Image style={styles.imageview}
                            source={item.photo}></Image>
                    </View>

                    <View style={styles.vmSub2}>

                        <Text style={styles.tvName}>{item.name}</Text>
                        <View style={{flexDirection:"row",marginTop:5}}>
                            <Image
                                style={styles.mapLogo}
                                source={images.map_logo} ></Image>
                            <Text style={styles.tvAdd}>{item.add}</Text>
                        </View>
                        
                    </View>

                    
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.vmMainView}>
               
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderCard(item)}
                    // keyExtractor={item => item.name}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({

    vmMainView: {
        flex: 1,

    },
    imContainer: {

    },
    vmSub1: {},
    vmSub2: {
    },
   
    tvName: {
        paddingLeft: 15,
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    tvAdd: {
         paddingLeft: 9,
        
        fontSize: 18,
        color: '#6b87b8',
       // marginTop: ,

    },
    
    mapLogo: {
        marginLeft:15,
        marginTop:4,
        height: 15,
        width: 15,
    },
    image: {
        resizeMode: "stretch",
        height: moderateScale(200),
        justifyContent: "flex-end",
        // width:100,
        paddingBottom: 25,
    },
    

    vmCardStyle: {
        flexDirection: "row",
        
        backgroundColor:"#f2f2f2",
        padding: 10,
    },
    vmSubCardStyle: {
        flexDirection: "row",
        padding: 10,
        flex: 1,
        backgroundColor:"white",
        //width:340,
        borderRadius: 4,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowColor: "#000",

    },
    imageview: {
        height: 70,
        width: 70,
        borderRadius: 3,

    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    vwStyle1:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white',      
        height: moderateScale(100),  
    },
    toMap: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        height: moderateScale(50),
        width: moderateScale(180),
        marginLeft:20,
        borderWidth:2,
        borderColor:'#cccccc',
        borderRadius:5,
    
    },
    tvMap: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        fontFamily:'bold',
    },
    toList: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        height: moderateScale(50),
        width: moderateScale(180),
        marginRight:20,
        borderWidth:2,
        borderColor:'#cccccc',
        borderRadius:5,
        
    },
    tvList: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        fontFamily:'bold',
    },
})
export default list;