import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from './Title'
import HomeImage from "../../assets/images/HomeImage3.png"

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
    <View style={styles.bannerContainer}>
        <Image 
        source={HomeImage}
        style={styles.banner}
        resizeMode="contain"
        />
    </View>
    <TouchableOpacity 
        onPress={() => navigation.navigate('Options')}
        style={styles.button}
        >
        <Text style={styles.buttonText}> Start</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({    
    banner:{
        height: 500,
        width: 500
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    container:{
    paddingTop: 40,
    paddingVertical: 20,
    height: '100%',
    backgroundColor: 'white'
    },
    button:{
        width: '100%', 
        backgroundColor: '#1A759F',
        padding: 20,
        borderRadius: 16, 
        alignItems: 'center', 
        marginBottom: 20
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    }

})