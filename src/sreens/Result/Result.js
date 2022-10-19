import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeImage from '../../../assets/images/HomeImage.png'

const Result = () => {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <View style={styles.bannerContainer}>
        <Image source={HomeImage}
        style={styles.banner}
        resizeMode="contain"
        />
    </View>
    <TouchableOpacity>
        <Text> Home</Text>
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
})