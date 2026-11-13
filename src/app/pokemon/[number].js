import { View, Text, Image , StyleSheet,} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import POKEMONS from "../../data/pokemon";

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

export default function FichePokemon() {
    const { number } = useLocalSearchParams();
    const pokemon = POKEMONS.find((p) => p.number == Number(number));
    
    return (
        <View style={{ flex: 1, alignItems: "center", padding: 24, gap: 10 }}>
            <Stack.Screen options={{ title: `${pokemon.name}` }} />
            <Image source={{ uri: `${ARTWORK}${pokemon.number}.png` }} style={styles.image} />
            <Text>{`#${pokemon.number}`}</Text>
            <Text style={styles.nomPokemon}>{`${pokemon.name}`}</Text>
            <View style={{ ...styles.containerText, backgroundColor: TYPE_POKEMON[pokemon.type]}}>
                <Text >{pokemon.type}</Text>
            </View>
        </View>
    )}

const styles = StyleSheet.create({
    nomPokemon: {
        fontSize: 18,
        fontWeight: "bold",
        flexShrink: 1,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
        resizeMode: "contain",
    },
    containerText: {
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 6,
        paddingVertical: 3,
        
    },
})