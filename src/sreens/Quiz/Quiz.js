import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
           <Text style={styles.question}>Q. Question</Text>  
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>Reponse 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>Reponse 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>Reponse 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>Reponse 4</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
        <TouchableOpacity 
         onPress={() => alert('Prochaine Question')}
         style={styles.button}
        >
                <Text style={styles.buttonText}>Sauter</Text>
        </TouchableOpacity>
            <TouchableOpacity
             onPress={() => navigation.navigate('Home')}
             style={styles.button}
            >
                <Text style={styles.buttonText}>Arreter</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={() => navigation.navigate('Result')}
             style={styles.button}
             >
                <Text style={styles.buttonText}>Valider</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    top: {
        marginVertical:16
    },
    options:{
        marginVertical: 16, 
        flex: 1
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
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
    question:{
        fontSize: 18
    },
    optionButtom:{
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#34A0A4",
        paddingHorizontal: 12,
        borderRadius: 12
    },
    option:{
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    }

})