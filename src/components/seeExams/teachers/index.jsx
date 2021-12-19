import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BASE_URL from '../../../service/baseUrl';

export default function SeeExamByTeacher () {
  const [teacherList, setTeacherList] = useState([]);
  const [examsList, setExamList] = useState([]);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`${BASE_URL}/teachers`)
      .then((res) => {
        setTeacherList(res.data);
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
    const listTeachersButtons = teacherList.map((teacher, key) => {
      let examCount = 0;

      for(let i = 0; i < examsList.length; i++){
        if(examsList[i].teacher_id === teacher.id){
          examCount ++;
        }
      }
      
      return (
        <Button key={key} onClick={() => {
          navigate(`${teacher.id}`);
        }}>
          <p>{teacher.name}</p>
          <p>{examCount} Provas</p>
        </Button>
      );
    });

    setContent(listTeachersButtons);
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