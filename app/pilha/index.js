import { Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Container,BoxDiferenteUm, BoxDiferenteDois, BoxDiferenteTres, Texxto, Titulos} from "./styles";


export default function Pilha() {
    return (
      <Container>
  
      <CaixaDeTitulo>
           <Titulos>Pilha</Titulos>
           </CaixaDeTitulo>
      
           <BoxDiferenteUm>
             <Texxto>A reciclagem de pilhas e baterias é de extrema importância devido aos riscos ambientais e 
              à presença de metais tóxicos contidos nesses dispositivos</Texxto>
           </BoxDiferenteUm>
           <BoxPequena>
            <Texxto>Dica</Texxto>
           </BoxPequena>
           <BoxDiferenteDois>A reciclagem de pilhas e baterias contribui para a preservação do meio ambiente, 
            a redução da poluição por metais pesados e a conservação de recursos naturais. 
            Ao descartar pilhas e baterias, lembre-se de buscar locais apropriados, como pontos de coleta específicos,
             lojas de eletrônicos ou postos de reciclagem, 
            para garantir que esses materiais sejam reciclados adequadamente.</BoxDiferenteDois>
            <BoxPequena> 
                <Texxto></Texxto> 
                </BoxPequena>
                <BoxDiferenteTres>
                    <Texxto>https://www.youtube.com/watch?v=tswmX6N8N-4</Texxto>
                </BoxDiferenteTres>
          <Botoes>
            <Link href='/metal'>Voltar</Link>
            <Link href='/vidro'>Próximo</Link>
          </Botoes>
      </Container>
    );
  }