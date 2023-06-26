import { Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Container, BoxUm, BoxDois, BoxTres, Texxto, Titulos} from "./styles";


export default function NaoRecilavel() {
    return (
      <Container>
  
      <CaixaDeTitulo>
           <Titulos>Não Reciclavel</Titulos>
           </CaixaDeTitulo>
      
           <BoxUm>
             <Texxto>A gestão adequada do lixo não reciclável é igualmente importante para 
                minimizar o impacto ambiental e promover a sustentabilidade. 
                Embora o lixo não reciclável não possa ser transformado em novos produtos, 
                existem medidas que podem ser tomadas para lidar com esse tipo de resíduo.</Texxto>
           </BoxUm>
           <BoxPequena>
            <Texxto>Dica</Texxto>
           </BoxPequena>
           <BoxDois>O lixo não reciclável deve ser descartado de maneira adequada, 
            seguindo as orientações das autoridades locais. Isso pode incluir o uso de sacos de lixo apropriados, 
            a utilização de contêineres adequados para a coleta e o encaminhamento para aterros sanitários devidamente licenciados</BoxDois>
            <BoxPequena> 
                <Texxto></Texxto> 
                </BoxPequena>
                <BoxTres>
                    <Texxto>https://www.youtube.com/watch?v=qlRXN2dOVdE</Texxto>
                </BoxTres>
          <Botoes>
            <Link href='/vidro'>Voltar</Link>
            <Link href='/homeUm'>Próximo</Link>
          </Botoes>
      </Container>
    );
  }