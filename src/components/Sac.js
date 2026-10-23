import { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable} from "react-native";


export default function Sac() {
    const [count = 0, setCount] = useState(0);
    return <>
        <View style={styles.containerPrincipal}>
            <Text style={styles.titre}>Nombres de PokéBalls : {count}</Text>
            <View style={styles.containerDeux}>
                <Pressable style={styles.containerBouton} onPress={() => setCount(count + 1)}>
                    <Text>
                        +
                    </Text>
                </Pressable>
                <Pressable style={styles.containerBouton} onPress={() => setCount(count - 1)}>
                    <Text>
                        -
                    </Text>
                </Pressable>
            </View>
            <Pressable style={styles.containerBouton} onPress={() => setCount(0)}>
                <Text>
                    Vider le sac
                </Text>
            </Pressable>
        </View>
    </>
    
    
}


const styles = StyleSheet.create({
    containerPrincipal: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,   
        gap: 10,
    },
    titre: {
        fontSize: 20,
        fontWeight: "bold",
    },
    containerDeux: {
        flexDirection: "row",
        gap: 5,
    },
    containerBouton: {
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        userSelect: "none",
    },
});