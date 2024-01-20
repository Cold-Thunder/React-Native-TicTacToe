import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Pressable, TouchableOpacity, FlatList } from "react-native";

import Icons from "../components/Icons";

const Home = () => {
    const [isCross, setIsCross] = useState(false)
    const [gWinner, setGWinner] = useState('')
    const [gValues, setGValues] = useState(new Array(9).fill(0, 0, 9));
    const [custStyle, setCustStyle] = useState(false);

    const resetGame = () => {
        setIsCross(false);
        setGWinner('');
        setGValues(new Array(9).fill(0, 0, 9))
        setCustStyle(false)
    }

    const checkWinner = () => {
        if (gValues[0] !== 0 && gValues[0] === gValues[1] && gValues[1] === gValues[2]) {
            setGWinner(`${gValues[0]} is winner! 🎉`)
        } else if (gValues[3] !== 0 && gValues[3] === gValues[4] && gValues[4] === gValues[5]) {
            setGWinner(`${gWinner[3]} is winner! 🎉`)
        } else if (gValues[6] !== 0 && gValues[6] === gValues[7] && gValues[7] === gValues[8]) {
            setGWinner(`${gValues[6]} is winner! 🎉`)
        } else if (gValues[0] !== 0 && gValues[0] === gValues[3] && gValues[3] === gValues[6]) {
            setGWinner(`${gValues[0]} is winner! 🎉`)
        } else if (gValues[1] !== 0 && gValues[1] === gValues[4] && gValues[4] === gValues[7]) {
            setGWinner(`${gValues[1]} is winner! 🎉`)
        } else if (gValues[2] !== 0 && gValues[2] === gValues[5] && gValues[5] === gValues[8]) {
            setGWinner(`${gValues[2]} is winner! 🎉`)
        } else if (gValues[0] !== 0 && gValues[0] === gValues[4] && gValues[4] === gValues[8]) {
            setGWinner(`${gValues[0]} is winner! 🎉`)
        } else if (gValues[2] !== 0 && gValues[2] === gValues[4] && gValues[4] === gValues[6]) {
            setGWinner(`${gValues[2]} is winner! 🎉`)
        }
    }

    const userTurn = (item) => {
        if (gWinner) {
            console.log(`${gWinner}`)
        } else if (gValues[item] === 0) {
            gValues[item] = isCross ? 'cross' : 'circle';
            setIsCross(!isCross);
            if(gValues[item] == "circle"){
                setCustStyle(!custStyle);
            }else{
                setCustStyle(!custStyle);
            }
        }
        checkWinner()
    }
    
    const player = `Player ${isCross ? "X" : "O"}'s turn`;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tic Tec Tao</Text>
            <View style={[ isCross ? styles.playerX : styles.playerO, gWinner ? styles.winNotic : "" ,styles.topBar]}>
                <Text style={[styles.turnText]}>{gWinner ? gWinner : player}</Text>
            </View>
            <View style={styles.buttons}>
                {
                    gValues.map((item, index) => (
                        <TouchableOpacity style={[styles.btn, custStyle ? styles.signO : styles.signX]} key={index} onPress={() => {userTurn(index)}}>
                            <Icons name={item} />
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={styles.bottomBar}>
                <Pressable style={styles.resetBtn} onPress={resetGame}>
                    <Text style={styles.resetTxt}>Reset</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        
    },
    heading: {
        marginTop: 30,
        fontSize: 33,
        fontWeight: "bold",
        color: "white",
    },
    topBar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:20,
        marginBottom: 40,
        height: 60,
        width: "90%",
        borderRadius: 10,
        elevation: 3
    },
    turnText: {
        textAlign: "center",
        height: 45,
        width: "100%",
        fontSize: 26,
        color: "white",
        borderRadius: 10,
    },
    showWin: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        height: 50,
        width: "70%",
        borderRadius: 10,
        backgroundColor: "#ffdddd",
        elevation: 3,
    },
    winText: {
        fontSize: 22,
        color: "black",
        fontWeight: "bold"
    },
    winNotic: {
        backgroundColor: "#11aaff",
        elevation: 5,
        shadowColor: "red",
        shadowOpacity: 1,
        shadowOffset: {
            width: 2, 
            height: 2
        }
    }, 
    playerO: {
        backgroundColor: "blue"
    },
    playerX: {
        backgroundColor: "red"
    },
    buttons: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "95%",
    },
    btn: {
        justifyContent: "center",
        alignItems: 'center',
        margin: 8,
        height: 100,
        width: "28%",
        backgroundColor: "#ddbbdd",
        borderRadius: 10,
        elevation: 3
    },
    signX: {
        backgroundColor: "skyblue"
    },
    signO: {
        backgroundColor: "pink"
    },
    resetBtn: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 50,
        height: 50,
        width: 150,
        backgroundColor: "red",
        elevation: 3,
        borderRadius: 8
    },
    resetTxt: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold"
    }
})