import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid red;
`;

const Title = styled.h1<{ $primary?: boolean }>`
  color: ${(props) => (props.$primary ? 'pink' : 'orange')};
  font-size: 1.5em;
`;

function App() {
  return (
    <Wrapper>
      <h1>App.tsx</h1>

      <Title $primary>Titulo primary con ampersand</Title>

      <Title>Titulo primary sin ampersand</Title>
    </Wrapper>
  );
}

export default App;
