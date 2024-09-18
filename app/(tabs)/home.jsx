import { View, Text, StyleSheet, Button, Image, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

export default function home() {
  return (
    <View style={styles.container}>
        <View style={styles.topSection}>
            <Text style={styles.topHeader}>Welcome Home</Text>
            <Text style={{ fontFamily: "sourceReg", fontSize: 14, marginTop: 10, textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus possimus, qui sequi, similique placeat nostrum error architecto, consequuntur perferendis adipisci vero voluptates. Placeat dolor nulla facere sapiente. Numquam, distinctio.</Text>
            
            <Pressable style={styles.aboutButton} onPress={() => router.push("/about")}>
                <Text style={styles.aboutText}>About Us</Text>
            </Pressable>
        </View>
        <View style={styles.bottomSection}>
            <Image style={styles.image} source={require("../../assets/images/towerApt1.jpg")} />
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
        marginBottom: 20
    },
    topHeader: {
        fontFamily: "sourceBold",
        fontSize: 40,
        textAlign: "center",
        color: '#990000'
    },
    bottomSection: {
        // bottom styles here
    },
    aboutButton: {
        marginTop: 30,
        padding: (5, 10),
        backgroundColor: "#990000"
    },
    aboutText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "sourceMed",
        fontSize: 20
    },
    image: {
        width: 350,
        height: 400,
        resizeMode: "contain",
        alignSelf: "center"
    }
})