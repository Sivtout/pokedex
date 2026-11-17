import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { router } from "expo-router";
import TYPE_POKEMON from "../data/typePokemon";

const ARTWORK = "https://raw.githubusercontent.com/PokeAPI/sprites" + "/master/sprites/pokemon/other/official-artwork/";


export default function PokemonCard({ pokemon, captured, onToggle }) {
    return (
        <Pressable style={captured ? { ...styles.container, backgroundColor: TYPE_POKEMON[pokemon.type] } : styles.container}
        onPress={() => router.push(`/pokemon/${pokemon.number}`)}>
            <View style={styles.container2}>
                <Image source={{ uri: `${ARTWORK}${pokemon.number}.png` }} style={styles.image} />
                <View style={styles.deuxiemeContainer}>
                    <View style={styles.troisiemeContainer}>
                        <Text>{`#${pokemon.number}`}</Text>
                        <Text style={styles.nomPokemon}>{pokemon.name}</Text>
                    </View>
                    <View style={{ ...styles.containerText, backgroundColor: TYPE_POKEMON[pokemon.type]}}>
                        <Text>{pokemon.type}</Text>
                    </View>
                </View>
            </View>
            <Pressable
                style={captured ? { ...styles.boutonCapture, backgroundColor: "#a3c6ff" } : styles.boutonCapture}
                onPress={onToggle}>
                <Text>{captured ? "Capturé ✓" : "Non Capturé"}</Text>
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        width: "100%",
        minWidth: 0,
        gap: 10,
    },
    container2: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 8,
        resizeMode: "contain",
    },
    deuxiemeContainer: {
        flex: 1,
        minWidth: 0,
        gap: 8,
        justifyContent: "center",
    },
    troisiemeContainer: {
        gap: 3,
    },
    nomPokemon: {
        fontSize: 18,
        fontWeight: "bold",
        flexShrink: 1,
    },
    containerText: {
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 6,
        paddingVertical: 3,
        alignSelf: "flex-start",
    },
    boutonCapture: {
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 8,
        alignItems: "center",
    },
});