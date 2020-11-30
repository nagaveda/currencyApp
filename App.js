import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity , 
  Image
} from 'react-native';

import Snackbar from "react-native-snackbar";
import Logo from "./assets/logo.png";

const currenyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
};

const App = () =>{
  
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultView] = useState(0);

  const convert = (currency) =>{
    if(inputValue){
      var value = currenyPerRupee[currency]*inputValue;
      setResultView(value.toFixed(2));
    }
    else{
      // Alert.alert("Input Error","Please Enter valid amount ",[
      //   { text: "OK", onPress: () => console.log("OK Pressed") }
      // ]);
      Snackbar.show({
        text: 'Please enter a valid INR amount',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:"#EA7773",
        textColor:"#000000"
      });
    }
    
  }

  return(
    <>
    <ScrollView backgroundColor="#1b262c" 
    keyboardShouldPersistTaps="handled"
    contentInsetAdjustmentBehavior="automatic"
    >
      <SafeAreaView style={styles.container}>
        <View>
          <Image style={styles.image} source={Logo}/>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Currency Converter
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter INR"
          placeholderTextColor="#c1c1c1"
          // value={inputValue}
          onChangeText={(inputValue)=>setInputValue(inputValue)}
          >
          </TextInput>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currenyPerRupee).map((currency) => (
            <TouchableOpacity key={currency}
            style={styles.convertButton}
            onPress={()=>{convert(currency)}}
            >
              <Text style={styles.convertButtonText}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </> 
  )
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#1b262c"
  },
  resultContainer:{
    height: 70,
    marginTop: 10,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    borderBottomWidth: 2,
    alignItems:"center"
  },
  resultValue:{
    fontSize: 30,
    color:"#FFF",
    fontWeight: "bold"
  },
  inputContainer:{
    marginTop: 50,
    height: 70,
    justifyContent:"center",
    alignItems:"center",
    borderBottomWidth:2,
    borderColor:"#bbe1fa"
  },
  input:{
    fontSize: 30,
    textAlign:"center",
    color:"#FFF"
  },
  convertButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop: 40,
  },
  convertButton:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    width:"33.3%",
    borderColor:"#bbe1fa",
    borderWidth: 2,
    marginTop: 10,
    backgroundColor:"#0f4c75"
  },
  convertButtonText:{
    color:"#FFF",
    fontSize:15
  },
  heading:{
    fontSize: 30,
    fontStyle:"italic",
    color:"white",
    textAlign:"center"
  },
  headingContainer:{
    marginTop: 60
  },
  image:{
    width:100,
    height: 100,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:160
  }
});