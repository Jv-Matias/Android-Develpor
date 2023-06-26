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
           <TextoDaCaixaHome>Você sabia que a reciclagem pode gerar empregos e sustentar a economia? 
            A indústria da reciclagem emprega milhares de pessoas em todo o mundo, desde coletores e 
            separadores de resíduos até operadores de usinas de reciclagem e fabricantes de produtos reciclados. 
            Ao optarmos por produtos feitos a partir de materiais reciclados, 
            estamos apoiando essa cadeia produtiva e estimulando a economia local. 
            Além disso, a reciclagem reduz os custos de produção para as empresas, 
            tornando seus produtos mais competitivos. Portanto, ao reciclar, 
            estamos confiantes não apenas para o meio ambiente, 
            mas também para o desenvolvimento sustentável da sociedade.</TextoDaCaixaHome>
         </Caixa>
        <Botoes>
          <Link href='/homeum'>Voltar</Link>
          <Link href='/hometres'>Próximo</Link>
        </Botoes>
    </Container>
  );
}