import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BASE_URL from '../../../service/baseUrl';

export default function ExamsByClasses () {
  const { id } = useParams();
  const [p1, setP1] = useState([]);
  const [p2, setP2] = useState([]);
  const [p3, setP3] = useState([]);
  const [ch, setCh] = useState([]);
  const [other, setOther] = useState([]);
  const [isThereExam, setIsThereExam] = useState(false);
  let p1List = [];
  let p2List = [];
  let p3List = [];
  let chList = [];
  let otherList = [];
  

  useEffect(() => {
    axios.post(`${BASE_URL}/exams-classes`, {id})
      .then((res) => {
        res.data.length !== 0 ? setIsThereExam(false) : setIsThereExam(true);

        res.data.forEach((exam) => {
          switch (exam.type) {
          case 'P1':
            p1List.push(exam);
            break;
        
          case 'P2':
            p2List.push(exam);
            break;

          case 'P3':
            p3List.push(exam);
            break;

          case '2ch':
            chList.push(exam);
            break;

          case 'Others':
            otherList.push(exam);
            break;

          default:
            break;
          }
        });

        setP1(p1List);
        setP2(p2List);
        setP3(p3List);
        setCh(chList);
        setOther(otherList);
      });
  }, []);

  function sort(array) {
    let aux;

    for(let i = 0; i < array.length - 1; i++){
      for(let j = i+1; j < array.length; j++){
        if(array[i].period > array[j].period){
          aux = array[i];
          array[i] = array[j];
          array[j] = aux;
        }
      }
    }
  }

  function setTable(type, array) {
    sort(array);

    return(
      <>
        <Tittle>{type}</Tittle>
        {
          array.map((exam, key) => {
            return(
              <Exam key={key}>
                <p>Nome: {exam.name}</p>
                <p>Professor: {exam.teacher.name}</p>
                <p>Período: {exam.classes.period}</p>
                <a href={exam.link}>PDF</a>
              </Exam>
            );
          })
        }
      </>
    );
  }

  return(
    <Page>
      {isThereExam ?
        <p>Esta matéria não tem provas cadastradas.</p>
        :
        <Columns>
          {setTable('P1', p1)}
          {setTable('P2', p2)}
          {setTable('P3', p3)}
          {setTable('2ch', ch)}
          {setTable('Others', other)}
        </Columns>
      }
    </Page>
  );
}

const Page = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;

  p {
    font-size: 30px;
    background-color: white;
    padding: 20px;
  }
`;

const Columns = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tittle = styled.h1`
  background-color: transparent;
  font-size: 30px;
  color: white;
  width: 90vw;
  margin: 10px 0;
`;

const Exam = styled.div`
  width: 90vw;
  height: 40px;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  align-items: center;
  justify-content: space-around;

  p{
    background-color: transparent;
    font-size: 20px;
    padding: 0;
  }
`;