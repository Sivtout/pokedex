import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import Titre from "../../components/Titre";
import POKEMONS from "../../data/pokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

function majuscule(nom) {
    return nom.charAt(0).toUpperCase() + nom.slice(1);
}

export default function Index() {
    const [feu, setFeu] = useState(false);
    const [search, setSearch] = useState("");
    const [captured, setCaptured] = useState([]);
    const [pokemons, setPokemons] = useState(null);

    function toggleCaptured(number) {
        let nouvelles = [];
        if (captured.includes(number)) {
            nouvelles = captured.filter((id) => id !== number);
        } else {
            nouvelles = [...captured, number];
        }
        setCaptured(nouvelles);
        AsyncStorage.setItem("captures", JSON.stringify(nouvelles));
    }

    async function charger() {
        const reponse = await fetch(API);
        const data = await reponse.json();
        const liste = data.results.map((p, i) => {
            const number = i + 1;
            const local = POKEMONS.find((item) => item.number === number);
            return {
                number, name: local?.name ?? majuscule(p.name), type: local?.type ?? "Inconnu",
            };
        });
        setPokemons(liste);
    }

    async function chargerCaptures() {
        const texte = await AsyncStorage.getItem("captures");
        if (texte !== null) {
            setCaptured(JSON.parse(texte))
        }
    }

    useEffect(() => {
        charger();
        chargerCaptures();
    }, []);

    if (pokemons === null) {
        return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    const capturesSeulement = feu;
    const filtres = capturesSeulement
        ? pokemons.filter((pokemon) => captured.includes(pokemon.number))
        : pokemons;
    const visibles = filtres.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.pageContainer}>
            <Titre />

            <Text style={styles.capturedTitle}>{`${captured.length} Pokémon capturés`}</Text>

            <TextInput
                placeholder="Rechercher un Pokémon"
                value={search}
                onChangeText={setSearch}
                style={styles.searchInput}
            />

            <Pressable style={styles.boutonFiltre} onPress={() => setFeu((current) => !current)}>
                <Text style={styles.textFiltre}>{feu ? "Tout afficher" : "Seulement les pokémons capturés"}</Text>
            </Pressable>

            {visibles.length === 0 ? (
                <Text style={styles.emptyText}>Aucun Pokémon trouvé</Text>
            ) : (
                <FlatList
                    data={visibles}
                    keyExtractor={(item) => String(item.number)}
                    numColumns={2}
                    extraData={captured}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.cardItem}>
                            <PokemonCard
                                pokemon={item}
                                captured={captured.includes(item.number)}
                                onToggle={() => toggleCaptured(item.number)}
                            />
                        </View>
                    )}
                />
            )}
        </View>
    
       


        // <ScrollView contentContainerStyle={styles.contentContainer}>
        //     <Titre />

        //     <Text style={styles.capturedTitle}>{`${captured.length} Pokémon capturés`}</Text>

        //     <TextInput
        //         placeholder="Rechercher un Pokémon"
        //         value={search}
        //         onChangeText={setSearch}
        //         style={styles.searchInput}
        //     />

        //     <Pressable style={styles.boutonFiltre} onPress={() => setFeu((current) => !current)}>
        //         <Text style={styles.textFiltre}>{feu ? "Tout afficher" : "Seulement le type Feu"}</Text>
        //     </Pressable>

        //     <Text style={styles.nbPokemon}>{`Nombres de Pokemon : ${visibles.length}`}</Text>

        //     {visibles.length === 0 ? (
        //         <Text>Aucun Pokémon trouvé</Text>) : (
        //         visibles.map((pokemon) => (
        //             <PokemonCard
        //                 key={pokemon.number}
        //                 pokemon={pokemon}
        //                 captured={captured.includes(pokemon.number)}
        //                 onToggle={() => toggleCaptured(pokemon.number)}
        //             />
        //         ))
        //     )}

        //     {/* <Aide/>
        //     <Sac/> */}
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    capturedTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 12,
        marginBottom: 12,
    },
    searchInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: "#ccc",
        backgroundColor: "white",
        marginBottom: 12,
    },
    boutonFiltre: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        backgroundColor: "rgb(52, 52, 52)",
        marginBottom: 12,
    },
    textFiltre: {
        fontWeight: "bold",
        color: "white",
    },
    listContent: {
        paddingBottom: 16,
    },
    columnWrapper: {
        justifyContent: "space-between",
        marginBottom: 12,
    },
    cardItem: {
        flex: 1,
        maxWidth: "48%",
        minWidth: 0,
    },
    emptyText: {
        textAlign: "center",
        marginTop: 20,
    },
});