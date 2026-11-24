import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import POKEMONS from "../../data/pokemon";
import TYPE_POKEMON from "../../data/typePokemon";

const ARTWORK = "https://raw.githubusercontent.com/PokeAPI/sprites" + "/master/sprites/pokemon/other/official-artwork/";

const TYPE_FR = {
    grass: "Plante", fire: "Feu", water: "Eau", electric: "Électrik",
    poison: "Poison", ground: "Sol", fairy: "Fée", normal: "Normal",
    bug: "Insecte", fighting: "Combat", psychic: "Psy", rock: "Roche",
    ghost: "Spectre", ice: "Glace", flying: "Vol", dragon: "Dragon",
    dark: "Ténèbres", steel: "Acier",
};

export default function FichePokemon() {
    const { number } = useLocalSearchParams();
    const pokemonNumber = Number(number);
    const [pokemon, setPokemon] = useState(null);
    const [nomFr, setNomFr] = useState(null);

    async function charger() {
        const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        const data = await reponse.json();
        setPokemon(data);

        const reponseFr = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`);
        const dataFr = await reponseFr.json();
        setNomFr(dataFr.names.find((n) => n.language.name === "fr")?.name ?? null);
    }

    useEffect(() => {
        charger();
    }, [pokemonNumber]);

    if (pokemon === null) {
        return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    const nom = nomFr !== null
        ? nomFr
        : POKEMONS.find((item) => item.number === pokemonNumber)?.name ?? pokemon.name;
    const typeApi = pokemon.types?.[0]?.type?.name;
    const type = TYPE_FR[typeApi] ?? POKEMONS.find((item) => item.number === pokemonNumber)?.type ?? "Inconnu";

    return (
        <View style={{ flex: 1, alignItems: "center", padding: 24, gap: 10 }}>
            <Stack.Screen options={{ title: nom }} />
            <Image source={{ uri: `${ARTWORK}${pokemonNumber}.png` }} style={styles.image} />
            <Text>{`#${pokemonNumber}`}</Text>
            <Text style={styles.nomPokemon}>{nom}</Text>
            <View style={{ ...styles.containerText, backgroundColor: TYPE_POKEMON[type] ?? "#A8A878" }}>
                <Text>{type}</Text>
            </View>
            <View style={styles.mesures}>
                <Text style={styles.mesure}>Taille : {pokemon.height / 10} m</Text>
                <Text style={styles.mesure}>Poids : {pokemon.weight / 10} kg</Text>
            </View>
        </View>
    );
}

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
    mesures: {
        gap: 4,
        alignItems: "center",
    },
    mesure: {
        fontSize: 16,
    },
});