import { Text, StyleSheet} from "react-native";

export default function Titre() {
    return <>
        <Text style={styles.titre}>Mon Pokédex</Text>
    </>
}


const styles = StyleSheet.create({
  titre: {
    fontSize: 50,
    fontWeight: "bold",
  },
});