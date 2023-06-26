import { Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Container,BoxUm, BoxDois, BoxTres, Texxto, Titulos} from "./styles";


export default function Vidro() {
    return (
      <Container>
  
      <CaixaDeTitulo>
           <Titulos>Vidro</Titulos>
           </CaixaDeTitulo>
      
           <BoxUm>
             <Texxto>A reciclagem do vidro desempenha um papel importante na conservação de recursos naturais, 
                na redução da poluição e na economia de energia.</Texxto>
           </BoxUm>
           <BoxPequena>
            <Texxto>Dica</Texxto>
           </BoxPequena>
           <BoxDois> A reciclagem do vidro é uma prática fundamental para a sustentabilidade ambiental. 
            Ao descartar vidros, lembre-se de separá-los por cor (transparente, verde e marrom) 
            e entregá-los em pontos de coleta seletiva específicos ou em programas de reciclagem local. 
            Contribua para a preservação do meio ambiente e para a economia circular, 
            incentivando a reciclagem do vidro.</BoxDois>
            <BoxPequena> 
                <Texxto>Video</Texxto> 
                </BoxPequena>
                <BoxTres>
                    <Texxto>https://www.youtube.com/watch?v=R8OvQVV5BtM</Texxto>
                </BoxTres>
          <Botoes>
            <Link href='/pilha'>Voltar</Link>
            <Link href='/naoreciclavel'>Próximo</Link>
          </Botoes>
      </Container>
    );
  }