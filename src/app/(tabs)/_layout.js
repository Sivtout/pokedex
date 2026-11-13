import { Tabs } from "expo-router";

export default function TabsLayout() {
    return <>
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Pokedex "}}/>
            <Tabs.Screen name="profil" options={{ title: "Profil"}}/>
        </Tabs>
    </>
}