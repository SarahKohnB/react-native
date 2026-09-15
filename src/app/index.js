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

import GameCard from "../components/GameCard";
//Reutilizar componentes, isso evita duplicação de código e mantenha a consistência visual

import { jogos } from "../data/jogos";
//Importante uma array de objetos do arquivo data/jogos.js

import { cores } from "../data/tema";
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
        <text style={StyleSheet.secaoTitulo}>Jogos em destaque</text>


        
        </ScrollView>
        );
}
        