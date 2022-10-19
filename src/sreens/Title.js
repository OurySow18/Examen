import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Bienvenu dans l´application qui vous aidera ä reussir votre examen</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    titleContainer:{
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{ 
        fontSize: 30,
        fontWeight: '500',
        color: '#1A759F',
        alignContent: 'center'
    }
})