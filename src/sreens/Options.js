import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Examen from "../../assets/images/Examen.png"
import Mathematics from "../../assets/images/Mathematics.png"
import ScienceExperimental from "../../assets/images/ScienceExperimental.png"
import ScienceSocial from "../../assets/images/ScienceSocial.png"

const Options = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHead}>Choisisser l´examen que vous voulez reussir</Text>
      <ScrollView>
      <View style={styles.optionContainer} >
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}
        >
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Examen</Text>
        </View>
        <Image 
            source={Examen}
            style={styles.banner}
            resizeMode="contain"
        />
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Quiz')}        
            style={styles.button}
        >
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Brevet</Text>
        </View>
        <Image 
            source={Mathematics}
            style={styles.banner}
            resizeMode="contain"
        />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}
        >
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Bac</Text>
        </View>
        <Image 
            source={ScienceExperimental}
            style={styles.banner}
            resizeMode="contain"
        />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}
        >
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Aide</Text>
        </View>
        <Image 
            source={ScienceSocial}
            style={styles.banner}
            resizeMode="contain"
        />
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    container:{ 
        height: '100%', 
    },
    banner:{      
        height: 100,
        width: 100
    },
    optionContainer:{  
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button:{
        width: '90%', 
        backgroundColor: '#1A759F',
        padding: 20,
        borderRadius: 16, 
        alignItems: 'center', 
        marginBottom: 20
    },
    titleContainer:{
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{ 
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        alignContent: 'center'
    },
    titleHead:{ 
        fontSize: 20,
        fontWeight: '500', 
        alignContent: 'center',
        padding: 10,
        paddingLeft: 20
    }
})