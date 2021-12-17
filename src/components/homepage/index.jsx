import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {Button} from '../../styles/shared.js';

export default function Homepage () {
  const navigate = useNavigate();

  return(
    <Page>
      <Button onClick={() => navigate('/send-exam/teachers')}>Enviar Prova</Button>
      <Button onClick={() => navigate('/see-exam/categories')}>Ver Provas</Button>
    </Page>
  );
}

const Page = styled.main`
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;