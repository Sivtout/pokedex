import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";
import Sac from "../components/Sac";
import Aide from "../components/Aide";

const POKEMONS = [
    { number: 1, name: "Bulbizarre", type: "Plante" },
    { number: 4, name: "Salamèche", type: "Feu" },
    { number: 7, name: "Carapuce", type: "Eau" },
    { number: 25, name: "Pikachu", type: "Électrik" },
    { number: 37, name: "Goupix", type: "Feu" },
    { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
    const [feu, setFeu] = useState(false);

    const pokemons = feu ? POKEMONS.filter((pokemon) => pokemon.type === "Feu"): POKEMONS;

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Titre />

            <Pressable style={styles.boutonFiltre} onPress={() => setFeu((current) => !current)}>
                <Text style={styles.textFiltre}>{feu ? "Tout afficher" : "Seulement le type Feu"}</Text>
            </Pressable>

            <Text style={styles.nbPokemon}>{`Nombres de Pokemon : ${pokemons.length}`}</Text>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.number} pokemon={pokemon} />
            ))}

            {/* <Aide/>
            <Sac/> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        justifyContent: "center",
        padding: 20,
        gap: 20,
    },
    nbPokemon: {
        fontWeight: "bold",
        fontSize: 20,
    },
    boutonFiltre: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        backgroundColor: "rgb(52, 52, 52)",
    },
    textFiltre: {
		fontWeight: "bold",
		color: "white",
    },
});