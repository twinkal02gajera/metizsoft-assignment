import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class myTrip extends React.Component{
    render(){
        return(
            <View style={styles.parentStyle}>
                <Text style={styles.tvHeaderStyle}>{'Welcome MyTripFile...'}</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    parentStyle:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    tvHeaderStyle:{
        color:'#000',
        fontSize:30,
        letterSpacing:1,
    }
})
export default myTrip;