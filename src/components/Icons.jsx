import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Icons = (props) =>{
    switch(props.name){
        case 'circle' : 
            return <Text style={styles.circle}>O</Text>
            break;
        case 'cross' :
            return <Text style={styles.cross}>X</Text>
            break;
        default:
            return <Text style={styles.def}>*</Text>
        break;
    }
}

export default Icons;

const styles = StyleSheet.create({
    circle: {
        color: "blue",
        fontSize: 44,
        fontWeight: "bold"
    },
    cross: {
        color: "red",
        fontSize: 44,
        fontWeight: "bold"
    },
    def: {
        color: "black",
        fontSize: 44,
        fontWeight: "bold"
    }
})