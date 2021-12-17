import styled from 'styled-components';
import { Button } from '../../../styles/shared';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';

export default function SelectType () {
  const navigate = useNavigate();
  const {setType} = useContext(UserContext);

  function handleClick (type){
    setType(type);
    navigate('/send-exam/finish');
  } 

  return(
    <Page>
      <Button onClick={() => handleClick('P1')}>P1</Button>
      <Button onClick={() => handleClick('P2')}>P2</Button>
      <Button onClick={() => handleClick('P3')}>P3</Button>
      <Button onClick={() => handleClick('2ch')}>2ch</Button>
      <Button onClick={() => handleClick('Outras')}>Outras</Button>
    </Page>
  );
}

const Page = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-evenly;
`;