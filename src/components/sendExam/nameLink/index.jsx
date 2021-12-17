import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../../context/UserContext';
import stringSchema from '../../../validation/stringValidation';
import BASE_URL from '../../service/baseUrl.js';

export default function FinishSendExam () {
  const {teacherId, classId, type, name, setName, link, setLink, } = useContext(UserContext);
  const navigate = useNavigate();

  async function validate() {
    const validation = await stringSchema.validate({
      name,
      link
    });

    if(validation.error !== undefined) return alert('Favor preencher os dados corretamente');

    const body = {
      teacherId, classId, type, name, link
    };

    try{
      const result = await axios.post(`${BASE_URL}/insert-exam`, body);

      if(result.data === 'Ok') {
        alert('Prova cadastrada');
        setName('');
        setLink('');
        navigate('/');
        return;
      }
    } catch ( error ) {
      if(error.response.data === 'Esta prova já esta cadastrada') {
        alert(error.response.data);
        return;
      }


      alert('Algo deu errado no servidor');
      setName('');
      setLink('');
      navigate('/');
      return;
    }

  }

  return(
    <Page>
      <Input placeholder='Nome da Prova' onChange={(e) => {
        setName(e.target.value);
      }}></Input>
      <Input placeholder='Link do PDF' onChange={(e) => {
        setLink(e.target.value);
      }}></Input>
      <Button onClick={() => {
        validate();
      }}>Enviar</Button>
    </Page>
  );
}

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 40vw;
  height: 70px;
  margin-bottom: 50px;
  padding: 20px;
  font-size: 30px;
`;

const Button = styled.button`
  width: 20vw;
  height: 50px;
  font-size: 30px;
`;