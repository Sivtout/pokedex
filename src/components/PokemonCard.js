import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { router } from "expo-router";

const ARTWORK = "https://raw.githubusercontent.com/PokeAPI/sprites" + "/master/sprites/pokemon/other/official-artwork/";

const TYPE_POKEMON = {
    Plante: "#78C850",
    Feu: "#F08030",
    Eau: "#6890F0",
    Électrik: "#F8D030",
    Poison: "#A040A0",
    Sol: "#E0C068",
    Fée: "#EE99AC",
    Normal: "#A8A878",
    Insecte: "#A8B820",
    Combat: "#C03028",
    Psy: "#F85888",
    Roche: "#B8A038",
    Spectre: "#705898",
    Glace: "#98D8D8",
    Vol: "#A890F0",
    Dragon: "#7038F8",
    Ténèbres: "#705848",
    Acier: "#B8B8D0",
};

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