import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeImage from '../../../assets/images/HomeImage.png'

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultat</Text>
      <View style={styles.bannerContainer}>
        <Image source={HomeImage}
        style={styles.banner}
        resizeMode="contain"
        />
    </View>
    <TouchableOpacity 
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}
         >
        <Text style={styles.buttonText}> Recomencer </Text>
    </TouchableOpacity>
    <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
         >
        <Text style={styles.buttonText}> Home </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner:{
        height: 300,
        width: 300
    },
    button:{ 
        backgroundColor: '#1A759F',
        padding: 20,
        paddingHorizontal: 16,
        borderRadius: 16, 
        alignItems: 'center', 
        marginBottom: 20
    },
    buttonText:{
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },
    title:{ 
        fontSize: 30,
        fontWeight: '500',
        color: '#1A759F',
        alignContent: 'center'
    }
})