import { Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Container,BoxUm, BoxDois, BoxTres, Texxto, Titulos} from "./styles";


export default function Plastico() {
    return (
      <Container>
  
      <CaixaDeTitulo>
           <Titulos>Plastico</Titulos>
           </CaixaDeTitulo>
      
           <BoxUm>
             <Texxto>O impacto do lixo plástico na natureza e na sociedade
O lixo plástico é um dos principais desafios ambientais enfrentados atualmente. 
A sua produção em larga escala e o descarte inadequado têm causado sérios danos aos ecossistemas 
e à vida marinha</Texxto>
           </BoxUm>
           <BoxPequena>
            <Texxto>OBS</Texxto>
           </BoxPequena>
           <BoxDois>  Nem todos os plásticos são facilmente recicláveis em todos os lugares. 
            Plásticos como embalagens metalizadas,
             filmes plásticos finos e outros tipos mais complexos podem ter dificuldades na reciclagem. 
            Certifique-se de conhecer as diretrizes locais de reciclagem e quais tipos de plástico são aceitos.</BoxDois>
            <BoxPequena> 
                <Texxto>Video</Texxto> 
                </BoxPequena>
                <BoxTres>
                    <Texxto>https://www.youtube.com/watch?v=H5rbcjYYTXA</Texxto>
                </BoxTres>
          <Botoes>
            <Link href='/organico'>Voltar</Link>
            <Link href='/papel'>Próximo</Link>
          </Botoes>
      </Container>
    );
  }