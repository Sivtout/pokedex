import { Text, View, StyleSheet, Pressable, Image, Alert } from "react-native";


export default function Profil() {
    return <>
        <View style={styles.container}>
              <View style={styles.containerPrincipal}>
                <Image source={{uri : "https://i.pravatar.cc/200"}} style={{ width: 120, height:120, borderRadius: 60}}></Image>
                <Text style={styles.title}>GIRAUDO Maxime</Text>
                <Text style={styles.sub}>Élève ingénieur - 1re année</Text>
                <View style={styles.donnee}>
                  <Text style={styles.donnees}>Tiplouf</Text>
                  <Text style={styles.donnees}>Arcanin</Text>
                  <Text style={styles.donnees}>Zekrom</Text>
                </View>
                <Pressable style={styles.bouton} onPress={() => Alert.alert("Contact", "maxime.giraudo@isen.yncrea.fr")}>
                  <Text style={styles.boutonText}>Me contacter</Text>
                </Pressable>
              </View>
            </View>
    </>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#ffffff"
  },
  containerPrincipal: {
    backgroundColor: "#e2e2e2",   
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    flexDirection: "row",
    fontSize: 30,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 16,
    color: "#676767",
    marginTop: 0,
  },
  donnee: {
    fontSize: 15,
    flexDirection: "row",
    gap: 10,
  },
  donnees: {
    borderWidth: 1,
    backgroundColor: "#9d9fa2",
    borderRadius: 6,
    padding: 4,
    color: "white",
    borderColor: "white",
  },
  bouton: {
    padding: 10,
    backgroundColor: "#9d9fa2",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "white",
     
  },
  boutonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },

});