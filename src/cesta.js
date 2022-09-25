import React from "react";
import { Text, Button, StyleSheet, Image, Dimensions, View} from "react-native";
import topo from "./imagens/assets/topo.png"
import logo from "./imagens/assets/logo.png"

const width = Dimensions.get('screen').width;

export default function Cesta(){
   return <>
      <Image source={topo} style={estiloCesta.topo}></Image>
      <Text style={estiloCesta.titulo}>Detalhes da cesta</Text>

      <View style={estiloCesta.viewCesta}>
         <Text style={estiloCesta.nomeCesta}>
            Cesta de verduras
         </Text>
         <View style={estiloCesta.viewFazenda}>
             <Image source={logo} style={estiloCesta.imagemFazenda}/>
             <Text style={estiloCesta.nomeFazenda}>
                Jenny Jack Farm
             </Text>
         </View>
         <Text style={estiloCesta.descricao}>
            Uma cesta com produtos cuidadosamente selecionados 
            e bla bla bla toda essa merda
         </Text>
         
         <Text style={estiloCesta.preco}>
            R$ 40,00
         </Text>

      </View>
   </>
}

const estiloCesta = StyleSheet.create({
      topo:{
         width: "100%",
         height: 578 / 768 * width,
      },

      titulo:{
         width: "100%",
         padding: 16,
         position: "absolute",
         textAlign: "center",
         fontSize: 20,
         fontWeight: "bold",
         color: "#fff",
      },
      viewCesta:{
         paddingHorizontal: 13,
         paddingVertical: 8,
         fontFamily: "Montserrat"
      },
      viewFazenda:{
         flexDirection: "row",
      },
      nomeCesta:{
         fontSize: 25,
         fontWeight: "bold",
      },
      imagemFazenda:{
         width: 32,
         height: 32,
      },
      nomeFazenda:{
         fontSize: 16,
         lineHeight: 26,  
         paddingHorizontal: 10, 
      },
      descricao:{
         color: "#A3A3A3",
         fontSize: 16,
         lineHeight: 26,
      },
      preco:{
         color: "#2A9F85",
         fontWeight: "bold",
         fontSize: 26,
         lineHeight: 42,
         marginTop: 8,
      }
});