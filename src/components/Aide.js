import { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable} from "react-native";


export default function Aide() {
    const [isOn, setOn] = useState(false);
    return <>
        <View style={styles.containerPrincipal}> 
            <Pressable style={styles.bouton} onPress={() => {isOn ? setOn(false) : setOn(true)}}>
                <Text> {isOn ? "Afficher l'aide" : "Masquer l'aide"}</Text>
            </Pressable>
            <Text>{!(isOn) && "Appuyez et Capturer pour ajouter un Pokémon à votre équipe"}</Text>
        </View>

    </>
}

const styles = StyleSheet.create({
    containerPrincipal: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,   
        gap: 10,
    },
    titre: {
        fontSize: 20,
        fontWeight: "bold",
    },
    bouton: {
        userSelect: "none",
        fontWeight: "bold",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10
    }
});