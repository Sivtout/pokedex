import { Text, View, StyleSheet, ScrollView } from "react-native";
import Titre from "../components/Titre";
import PokemonCard from "../components/PokemonCard";

// POKEMONS.map((pokemon) => console.log(pokemon.name));
// const typeFeu = POKEMONS.filter((pokemon) => pokemon.type === "Feu");
// console.log(typeFeu);
// POKEMONS.map((pokemon) => console.log(`#${pokemon.number} ${pokemon.name}`));

// const totalPokemon = ;  il faut compter le nombre de pokemon
// il faut lui envoyer le lien Github avant lundi

export default function Index() {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            
            <Titre/>
            <PokemonCard/>
          
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
});