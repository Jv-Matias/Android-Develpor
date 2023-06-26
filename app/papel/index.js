import { Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Container,BoxUm, BoxDois, BoxTres, Texxto, Titulos} from "./styles";


export default function Papel() {
    return (
      <Container>
  
      <CaixaDeTitulo>
           <Titulos>Papel</Titulos>
           </CaixaDeTitulo>
      
           <BoxUm>
             <Texxto>O papel é um material amplamente utilizado em nosso dia a dia, 
                seja para escrita, impressão ou embalagens. No entanto,
                 o descarte inadequado do lixo de papel pode ter impactos significativos no meio ambiente.</Texxto>
           </BoxUm>
           <BoxPequena>
            <Texxto>Dica</Texxto>
           </BoxPequena>
           <BoxDois>O papel é um material amplamente utilizado em nosso dia a dia, seja para escrita, 
            impressão ou embalagens. No entanto,
             o descarte inadequado do lixo de papel pode ter impactos significativos no meio ambiente.</BoxDois>
            <BoxPequena> 
                <Texxto></Texxto> 
                </BoxPequena>
                <BoxTres>
                    <Texxto>https://www.youtube.com/watch?v=fjt5gWCx120</Texxto>
                </BoxTres>
          <Botoes>
            <Link href='/organico'>Voltar</Link>
            <Link href='/metal'>Próximo</Link>
          </Botoes>
      </Container>
    );
  }