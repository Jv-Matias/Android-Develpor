import { Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Container,BoxUm, BoxDois, BoxTres, Texxto, Titulos} from "./styles";


export default function Metal() {
    return (
      <Container>
  
      <CaixaDeTitulo>
           <Titulos>Metal</Titulos>
           </CaixaDeTitulo>
      
           <BoxUm>
             <Texxto>O lixo metálico reciclável, como latas de alumínio, 
                embalagens de metal, sucatas de ferro e cobre, 
                possui um potencial significativo para a reciclagem.</Texxto>
           </BoxUm>
           <BoxPequena>
            <Texxto>Dica</Texxto>
           </BoxPequena>
           <BoxDois>A reciclagem do lixo metálico reciclável faz parte de um sistema de economia circular,
             em que os materiais são mantidos em uso por mais tempo,
              reduzindo a dependência de recursos naturais finitos. 
            Além disso, a indústria da reciclagem de metais cria empregos e estimula a economia local.</BoxDois>
            <BoxPequena> 
                <Texxto></Texxto> 
                </BoxPequena>
                <BoxTres>
                    <Texxto>https://www.youtube.com/watch?v=EQufne0G4cI</Texxto>
                </BoxTres>
          <Botoes>
            <Link href='/papel'>Voltar</Link>
            <Link href='/pilha'>Próximo</Link>
          </Botoes>
      </Container>
    );
  }