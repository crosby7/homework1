import { View, Text, StyleSheet, Button, Image, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'


export default function about() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.topHeader}>IU Indy Merch</Text>
        <Text style={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi adipisci architecto velit. Ipsum dolores sapiente blanditiis totam, iure nesciunt commodi vero rerum deserunt nam atque dignissimos iste nulla! Nam.</Text>
        <Text style={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt velit, aspernatur cumque debitis, enim a tempora fuga, labore architecto commodi mollitia dicta. Vitae quam modi quasi assumenda magni natus.</Text>
      </View>
      <View>
        <Image style={styles.image} source={require("../../assets/images/trident1.jpg")}/>
        <Pressable style={styles.button} onPress={() => router.push("/about")}>
          <Text style={styles.buttonText}>Have Questions?</Text>
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
    flex: 1
  },
  topHeader: {
    fontFamily: 'sourceBold',
    color: '#990000',
    textAlign: 'center',
    fontSize: 38,
    marginBottom: 10
  },
  lorem: {
    fontFamily: 'sourceReg',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10
  },


  image: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  button: {
    marginTop: 30,
    padding: (5, 10),
    backgroundColor: "#990000"
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "sourceMed",
    fontSize: 18
  }
})