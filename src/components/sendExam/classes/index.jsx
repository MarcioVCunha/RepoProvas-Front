import { useContext, useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import BASE_URL from '../../../service/baseUrl.js';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '../../../styles/shared.js';
import UserContext from '../../../context/UserContext.js';

export default function SelectClass () {
  const {teacherId} = useParams();
  const {setClassId} = useContext(UserContext);
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post(`${BASE_URL}/classes-teacher`, { teacherId })
      .then(
        (res) => {
          setClasses(res.data[0].classes);
        }
      );
  }, []);

  return(
    <Page>
      {
        classes.map((oneClass, key) => {
          return(
            <Button key={key} onClick={
              () => {
                setClassId(oneClass.id);
                navigate('/send-exam/type');
              }
            }>{oneClass.name}</Button>
          );
        })
      }
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