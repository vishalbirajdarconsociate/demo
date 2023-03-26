import { Dimensions ,View, Text, Image, ScrollView, StyleSheet,TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Movieinfo} from './movieinfo';

 var sd=[]
const Movielist = (props) => {
    const [single, setSingle] = useState([])
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://sitesforvishal.pythonanywhere.com/apiread')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
    }, []);
    function handlePress (item){
        setSingle(item)
        Alert.alert('info',`
        name:${item.name},
        date:${item.release_year},
        desc:${item.desc}`);
        sd=single
        console.log(single)
      }
    return (
        <ScrollView>
            {
                data.map(item => (
                            <TouchableWithoutFeedback style={styles.toucheble} key={item.id} onPress={() => handlePress(item)}>
                    <View style={styles.container} >
                            <Image source={{ uri: item.image }} style={{ width: 200, height: 300 }} />
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    toucheble:{
        // margin:25
    },
    container: {
        flex: 1,
        marginHorizontal: Dimensions.get('window').width*0.15,
        marginVertical: Dimensions.get('window').width*0.04,
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#5c5c5c'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});


export default Movielist
export {sd}