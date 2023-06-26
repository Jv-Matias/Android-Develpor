import { Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Container, Botoes, Title, Caixa, CaixaDeTitulo, TextoDaCaixaHome} from "./styles";

export default function HomeDois() {
  return (
    <Container>

    <CaixaDeTitulo>
         <Title>Terra Fertil</Title>
         </CaixaDeTitulo>
    
         <Caixa>
           <TextoDaCaixaHome>A reciclagem é uma atitude que todos devemos adotar para preservar os recursos naturais e combater as mudanças climáticas. 
            Ao reciclarmos, estamos evitando o desperdício de materiais que podem ser reaproveitados, 
            como papel, plástico, vidro e metal. Esses materiais, quando descartados corretamente e reciclados, 
            são transformados em novos produtos, atendendo a demanda por matérias-primas virgens.
             Além disso, a reciclagem contribui para a redução da emissão de gases de efeito estufa, 
             uma vez que a produção a partir de materiais reciclados emite menos poluentes do que a produção a partir de matérias-primas convencionais. 
            Faça a sua parte e recicle! O planeta agradece..</TextoDaCaixaHome>
         </Caixa>
        <Botoes>
        <Link href='/homedois'>Voltar</Link>
          <Link href='/organico'>Proximo</Link>
        </Botoes>
    </Container>
  );
}