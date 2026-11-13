import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import Titre from "../../components/Titre";
import POKEMONS from "../../data/pokemon";


export default function Index() {
    const [feu, setFeu] = useState(false);
    const [search, setSearch] = useState("");
    const [captured, setCaptured] = useState([]);

    function toggleCaptured(number) {
        if (captured.includes(number)) {
            setCaptured(captured.filter((id) => id !== number));
        } else {
            setCaptured([...captured, number]);
        }
    }

    const pokemons = feu ? POKEMONS.filter((pokemon) => captured.includes(pokemon.number)) : POKEMONS;
    const visibles = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
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
                            number={item.number}
                            name={item.name}
                            type={item.type}
                            pokemon={item}
                            captured={captured.includes(item.number)}
                            onToggle={() => toggleCaptured(item.number)}
                        />
                    </View>
                )}
            />
        </View>
    
        </>


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
    contentContainer: {
        justifyContent: "center",
        padding: 20,
        gap: 20,
    },
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
});