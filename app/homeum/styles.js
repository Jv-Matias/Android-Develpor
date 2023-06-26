import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #C9AA8C;
`;

export const Botoes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 64px;
  font-weight: bold;
`

export const Caixa = styled.View`
box-sizing: 200px;
width: 324px;
height: 100px;
top: 00px;
background: #000000;
border-radius: 10px;
`;

export const CaixaDeTitulo = styled.View`
position: absolute;
width: 134px;
height: 46px;
top: 22px;
background: #7C9364;
border-radius: 50px;
`;

export const TextoDaCaixaHome = styled.Text`
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
text-align: center;

color: #FFFFFF;
`;