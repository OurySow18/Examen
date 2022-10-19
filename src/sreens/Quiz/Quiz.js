import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'

const Quiz = ({navigation}) => {

    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);

    useEffect(() => {
        getQuiz();
    }, [])

    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&category=17&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results[0]);
        setQuestions(data.results)
    }

    const handleNextPress = () =>{
        setQues(ques+1) 
    }
    const handleFinish = () =>{
        setQues(0)
        navigation.navigate('Result')
    }
  return (
    <View style={styles.container}>

        {
            questions &&
            <View style={styles.parent}>
            <View style={styles.top}>
           <Text style={styles.question}>Q. {questions[ques].question}</Text>  
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>{questions[ques].incorrect_answers[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>{questions[ques].incorrect_answers[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>{questions[ques].correct_answer}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>{questions[ques].incorrect_answers[2]}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
        <TouchableOpacity 
         onPress={handleFinish}
         style={styles.button}
        >
                <Text style={styles.buttonText}>Terminer </Text>
        </TouchableOpacity>
       { /*ques!==9 &&     <TouchableOpacity
             onPress={() => navigation.navigate('Home')}
             style={styles.button}
            >
                <Text style={styles.buttonText}>Sauter</Text>
        </TouchableOpacity> */ }
            { ques!==9 &&
            <TouchableOpacity 
             onPress={handleNextPress}
             style={styles.button}
             >
                <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
}   
          
        </View>
        </View>
        }

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
    }, 
    parent: {
        height: '100%'
    }

})