import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function products() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.item}>
            <Image style={styles.image} source={require('../../assets/images/shirt1.jpeg')} />
            <Text style={styles.itemText}>Jaguars Short Sleeve</Text>
            <Pressable style={styles.addToCart}>
                <Text style={styles.cartText}>Add to Cart</Text>
            </Pressable>
        </View>
        <View style={styles.item}>
            <Image style={styles.image} source={require('../../assets/images/shirt2.jpeg')} />
            <Text style={styles.itemText}>White Long Sleeve</Text>
            <Pressable style={styles.addToCart}>
                <Text style={styles.cartText}>Add to Cart</Text>
            </Pressable>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.item}>
            <Image style={styles.image} source={require('../../assets/images/longsleeve.jpg')} />
            <Text style={styles.itemText}>Black Long Sleeve</Text>
            <Pressable style={styles.addToCart}>
                <Text style={styles.cartText}>Add to Cart</Text>
            </Pressable>
        </View>
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
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    },
    item: {
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150
    },
    itemText: {
        fontFamily: 'sourceReg',
        fontSize: 12,
        marginTop: 5
    },
    addToCart: {
        padding: (5, 5),
        backgroundColor: "#990000",
        width: 150,
        marginTop: 10,
        borderRadius: 20
    },
    cartText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'sourceReg'
    }
})