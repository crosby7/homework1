import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

export default function contact() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.topHeader}>Contact Us</Text>
        <Image style={styles.image} source={require("../../assets/images/droneShot.jpg")}/>
      </View>
      <View>
        <TextInput 
          style={styles.input}
          placeholder='Name...'
        />
        <TextInput 
          style={styles.input}
          placeholder='Email...'
        />
        <TextInput 
          style={styles.input}
          placeholder='Phone Number...'
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
    marginTop: 40
  },
  topSection: {
    marginBottom: 10
  },
  topHeader: {
    fontFamily: 'sourceBold',
    color: '#990000',
    textAlign: 'center',
    fontSize: 38,
    marginBottom: 10
  },
  image: {
    width: 350,
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#990000',
    fontFamily: 'sourceReg'
  },
  button: {
    padding: (5, 10),
    backgroundColor: "#990000",
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "sourceMed",
    fontSize: 18
  }
})