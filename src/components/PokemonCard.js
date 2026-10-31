import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useState } from "react";

const ARTWORK ="https://raw.githubusercontent.com/PokeAPI/sprites" + "/master/sprites/pokemon/other/official-artwork/";

const TYPE_POKEMON = {
    Plante: "#78C850",
    Feu: "#F08030",
    Eau: "#6890F0",
    Électrik: "#F8D030",
};

export default function PokemonCard({ pokemon }) {
    const [captured, setCaptured] = useState(false);

    return (
        <View style={captured ? { ...styles.container, backgroundColor : TYPE_POKEMON[pokemon.type]} : styles.container}>
            <View style={styles.container2}>
                <Image source={{ uri: `${ARTWORK}${pokemon.number}.png` }} style={{ width: 100, height: 100, borderRadius: 3 }} />
                <View style={styles.deuxiemeContainer}>
                    <View style={styles.troisiemeContainer}>
                        <Text>{`#${pokemon.number}`}</Text>
                        <Text style={styles.nomPokemon}>{pokemon.name}</Text>
                    </View>
                    <View style={{ ...styles.containerText, backgroundColor: TYPE_POKEMON[pokemon.type] }}>
                        <Text>{pokemon.type}</Text>
                    </View>
                </View>
            </View>
            <Pressable style={captured ? { ...styles.boutonCapture, backgroundColor: "#a3c6ff"} : styles.boutonCapture} 
                onPress={() => setCaptured(!captured)}>
                <Text>{captured ? "Capturé ✓" : "Non Capturé"}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: "row",
        gap: 10,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    container2: {
        flexDirection: "row",
        gap: 10,
    },
    deuxiemeContainer: {
        gap: 10,
        justifyContent: "center ",
    },
    troisiemeContainer: {
        gap: 3,
        justifyContent: "center ",
    },
    nomPokemon: {
        fontSize: 20,
        fontWeight: "bold",
    },
    containerText: {
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        fontWeight: "600",
        width: "fit",
    },
    boutonCapture: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 8,
        justifyContent: "center",
        userSelect: "none",
    },  
});