import { Link } from "expo-router";
import { Container, BoxUm, BoxDois, BoxTres, Texxto, Titulos} from "./styles";


export default function organico() {
    return (
      <Container>
  
      <CaixaDeTitulo>
           <Titulos>Organico</Titulos>
           </CaixaDeTitulo>
      
           <BoxUm>
             <Texxto>O lixo orgânico é uma parte inevitável da nossa vida cotidiana.
                 Ele consiste principalmente de resíduos de origem vegetal ou animal,
                  como restos de comida, cascas de frutas, aparas de grama e folhas caídas.
                   Embora possa ser facilmente descartado como algo sem valor,
                 o lixo orgânico possui um potencial significativo.</Texxto>
           </BoxUm>
           <BoxPequena>
            <Texxto>Dica</Texxto>
           </BoxPequena>
           <BoxDois> Tenha um recipiente específico para o lixo orgânico, como uma lixeira ou balde com tampa.
             Certifique-se de que o recipiente seja resistente,
             fácil de limpar e tenha uma tampa para evitar odores e 
             impedir que insetos e animais tenham acesso aos resíduos.</BoxDois>
            <BoxPequena> 
                <Texxto>Video</Texxto> 
                </BoxPequena>
                <BoxTres>
                    <Texxto>https://www.youtube.com/watch?v=o0EYneEPUmQ&t=1s</Texxto>
                </BoxTres>
          <Botoes>
            <Link href='/hometres'>Voltar</Link>
            <Link href='/plastico'>Próximo</Link>
          </Botoes>
      </Container>
    );
  }