    //===========================================
    //ETAPA 4 - CRIAR COMPONENTE
    //===========================================
    import {view, text, Image, Pressable, StyleSheet} from "react-native";
    import { useRouter } from "expo-router";
    // navegação programatica
    import { cores } from "../data/tema";

    export default function GameCard ({jogo}){
        const router = useRouter();

        return (
            <Pressable
            style={StyleSheet.card}
            onPress={() => router.push("/jogos/${jogo.id}")} //Navega entre as cotas
            >
                <Image source={jogo.imagem} style={StyleSheet.imagem}/>
                <View style={styles.info}>
                    <text style={styles.nome} numberOFLines={1}>
                        {jogo.nome}
                    </text>
                    <text style={styles.genero}>{jogo.genero}</text>
                    <text style={styles.nota}>⭐{jogo.nota}</text>
                </View>
            </Pressable>
        )
    }
    const styles = StyleSheet.create({

    })
    