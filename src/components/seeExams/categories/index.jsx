import styled from 'styled-components';
import { Button } from '../../../styles/shared';
import {useNavigate} from 'react-router-dom';

export default function ExamCategories () {
  const navigate = useNavigate();

  return(
    <Page>
      <Button onClick={() => navigate('teachers')}>
        Listar por Professor
      </Button>  
      <Button onClick={() => navigate('classes')}>
        Listar por Disciplinas
      </Button>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;