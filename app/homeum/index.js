import { Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Container, Botoes, Title, Caixa, CaixaDeTitulo, TextoDaCaixaHome} from "./styles";

export default function HomeUm() {
  return (
    <Container>

   <CaixaDeTitulo>
        <Title>Terra Fertil</Title>
        </CaixaDeTitulo>
   
        <Caixa>
          <TextoDaCaixaHome>A reciclagem é um processo fundamental para proteger o meio ambiente. 
            Ao reciclarmos materiais como papel, plástico, vidro e metal, 
            estamos gerando a quantidade de resíduos que vão parar em aterros sanitários e evitando a 
            geração de recursos naturais. Além disso, a reciclagem ajuda a economizar energia, 
            pois o processo de produção a partir de materiais reciclados consome menos energia do que a partir 
            de matérias-primas virgens. Todos podemos contribuir para a reciclagem, separando corretamente nossos 
            resíduos e encaminhando-os para a coleta seletiva.
             Pequenos gestos podem fazer uma grande diferença!</TextoDaCaixaHome>
        </Caixa>
        <Botoes>
          <Link href='/'>Voltar</Link>
          <Link href='/homedois'>Next</Link>
        </Botoes>
    </Container>
  );
}