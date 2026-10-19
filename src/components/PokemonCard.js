import { Text, StyleSheet, View, Image} from "react-native";

const ARTWORK ="https://raw.githubusercontent.com/PokeAPI/sprites" + "/master/sprites/pokemon/other/official-artwork/";

const POKEMONS = [
    { number: 1, name: "Bulbizarre", type: "Plante" },
    { number: 4, name: "Salamèche", type: "Feu" },
    { number: 7, name: "Carapuce", type: "Eau" },
    { number: 25, name: "Pikachu", type: "Électrik" },
    { number: 37, name: "Goupix", type: "Feu" },
    { number: 43, name: "Mystherbe", type: "Plante" },
    ];

const TYPE_POKEMON = {
    Plante : "#78C850",
    Feu : "#F08030",
    Eau : "#6890F0",
    Électrik : "#F8D030",
}


export default function Titre() {
    return <>
        <Text style={styles.nbPokemon}>{`Nombres de Pokemon : ${POKEMONS.length}`}</Text>
        {POKEMONS.map((pokemon) => (
            <View key={pokemon.number} style={styles.container}>
                <Image source={{ uri: `${ARTWORK}${pokemon.number}.png` }} style={{ width: 100, height: 100, borderRadius: 3}}></Image>
                <View style={styles.deuxiemeContainer}>
                    <View style={styles.troisiemeContainer}>
                        <Text>
                            {`#${pokemon.number}`}
                        </Text>
                        <Text style={styles.nomPokemon}>
                            {pokemon.name}
                        </Text>
                    </View>
                    <View style={{...styles.containerText, backgroundColor: TYPE_POKEMON[pokemon.type]}}>
                        <Text>
                            {pokemon.type}
                        </Text>
                    </View>
                    
                </View>
            </View>
        ))}
    </>
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: "row",
        gap: 10,
        alignContent: "center",
        padding: 10,
    },
    deuxiemeContainer: {
        gap: 10,
        justifyContent: "center "
    },
    troisiemeContainerContainer: {
    
        gap: 3,
        justifyContent: "center "
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
    nbPokemon: {
        fontWeight: "bold",
        fontSize: 20,
    },
});