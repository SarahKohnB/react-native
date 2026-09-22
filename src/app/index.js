// ETAPA 1 - INICIO DO PROJETO: TELA INICIAL

// O que fazemos aqui?
// Esta é a tela inicial do app (rota "/")

import { View, text, Scrollview, FlatList, pressable, StyleSheet} from "react-native";
//view - Container básicos
//text - para exibir texto
//ScrolView - permite rolagem vertical
//FlatList - lista otimizada com eolagem
//Pressable - botão de feedback de toque
//StyleSheet - define estilos

import { useRouter } from "expo-router";
//acesso ao objeto router, tem a função de navegação baseada em arquivos (biblioteca)

import GameCard from "./components/GameCard";
//Reutilizar componentes, isso evita duplicação de código e mantenha a consistência visual

import { jogos } from "./data/jogos";
//Importante uma array de objetos do arquivo data/jogos.js

import { cores } from "./data/tema";
//Importa a paleta de cores do app do arquivo data/tema.js

//========================================================

export default function Inicio(){
    const router = useRouter();
    // obtemos o objeto de navegação
    const destaques = jogos.filter((jogo) => jogo.destaque)
     //percorre o array jogos e cria um novo array destaques contendo apenas os objetos cujo o campo "destaque" seja true
     const populares = [...jogos].sort((a, b) => b.nota - a.nota).slice(0, 5);

     //...jogos -> cria uma copia do array original
     //sort ((a, b)) => b.nota - a.nota) ordena a copia da maior nota para a menor nota
     //.slice(0, 5): extrai apenas os 5 primeiros elementos do array

        //===========================================
        //BLOCO 2 - ESTRUTURA DA TELA
        //===========================================
        return(
            //inicio do JSX retornando pelo componente: define o que será redenrizado na tela
            <ScrollView style = {style.container} contentContainerStyle={StyleSheet.conteudo}>
                {/* scrollview: container com rolagem vertical */}

                <text style = {style.titulo}>GameHub</text>
                {/* Exibe o texto "GameHub" como titulo, usando o estilo "titulo" */}
                <text style={style.subtitulo}>Seu universo de jogos em um só lugar</text>

        //===========================================
        //BLOCO 2.1 - SEÇÃO JOGOS
        //===========================================
        <text style={StyleSheet.secaoTitulo}>Jogos em Destaque</text>
        {/* Exibe o titulo desta secção, usando o estilo "secaotitulo" */}
        <FlatList 
        data={destaques}
        //define a fonte de dados da lista - array "destaques"
        keyExtractor={(item) => item.id}
        //Função que retorna uma chave unica
        horizontal
        //Faz a lista rolar
        showVerticalScrollIndicator={false}
        //oculta a barrinha de rolagem horizontal, deixando a interface mais limpa
        renderItem={({item}) => <GameCard jogo = {item}/>}
        //Função chamada para cada elemento do array "data"
        
        />
        //===========================================
        //BLOCO 2.2 - SEÇÃO "Mais populares"
        //===========================================

        {/* Mesma estrutura da seção anterior, mas com dados diferentes */}
        <text style={StyleSheet.secaoTitulo}>Mais Populares</text>
        {/*Título da segunda seção, reaproveitando o mesmo estilo "Seção Título" */}

        <FlatList
        data={populares}
        //Desta vez a fonte de dados é o array "populares" (top 5 por nota)
        keyExtractor={({item}) => item.id }
        horizontal
        showsHorizontalScrollIndicator={false}
        //Esconder o indicador de rolagem
        renderItem={({item}) => <GameCard jogo={item}/>}
        //Reutiliza o mesmo componente GameCard, provando que ele funciona com qualquer lista de jogos
        
        />
        //===========================================
        //BLOCO 2.3 - Botao "Ver todos jogos"
        //===========================================
        {/* Pressable oferece mais controle sobre o estilo e feedback visual */}
        <pressable
        style={styles.botao}
        //Aplica o estilo visual no botao
        onPress={() => router.push("./jogos")}
        //onPress: Função executada quando o usuário toca no botão
        //router.push("./jogos") navega para a rota "/jogos"
        >
            <text style={styles.textobotao}>Ver todos os Jogos</text>

        </pressable>

        </ScrollView>
        );
}
        
        //===========================================
        //BLOCO 3 - ESTILOS
        //===========================================
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: cores.fundo,
            },
            conteudo: {
                padding: 20,
                paddingBottom: 40,
            },
            titulo: {
                fontSize: 32,
                fontWeight:"bold",
                color: cores.textoPrincipal,
            },
            subtitulo: {
                fontSize: 15,
                color: cores.textoSecundario,
                marginTop: 4,
                marginBottom: 24,
            },
            secaoTitulo: {
                fontSize: 18,
                fontWeight: "bold",
                color: cores.textoPrincipal,
                marginTop: 8,
                marginBottom: 12,
            },
            botao: {
                backgroundColor: cores.roxo,
                borderRadius: 12,
                paddingVertical: 14,
                alignItems: "center",
                marginTop: 24,
            },
            textoBotao: {
                color: cores.textoPrincipal,
                fontSize: 16,
                fontWeight: "bold",
            }
        })
        