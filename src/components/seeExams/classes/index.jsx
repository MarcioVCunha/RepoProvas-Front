import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BASE_URL from '../../../service/baseUrl';

export default function SeeExamByClassId () {
  const [classList, setClassList] = useState([]);
  const [examsList, setExamList] = useState([]);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`${BASE_URL}/classes`)
      .then((res) => {
        setClassList(res.data);
      });

    axios.get(`${BASE_URL}/exams`)
      .then((res) => {
        setExamList(res.data);
      });
  }, []);

  useEffect(() => {
    contentSetter();
  }, [examsList]);

  async function contentSetter() {
    const listClassesButtons = classList.map((classes, key) => {
      let examCount = 0;

      for(let i = 0; i < examsList.length; i++){
        if(examsList[i].class_id === classes.id){
          examCount ++;
        }
      }
      
      return (
        <Button key={key} onClick={() => {
          navigate(`${classes.id}`);
        }}>
          <p>{classes.name}</p>
          <p>{examCount} Provas</p>
        </Button>
      );
    });

    setContent(listClassesButtons);
  }

  return(
    <Page>
      {content}
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

const Button = styled.button`
    width: 40vw;
  height: 30vh;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 30px;
    font-weight: 700;
    margin: 10px;
  }
`;