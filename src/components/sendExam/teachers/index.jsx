import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import BASE_URL from '../../service/baseUrl.js';
import { Button } from '../../../styles/shared.js';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../context/UserContext.js';

export default function SelectTeacher() {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();
  const {setTeacherId} = useContext(UserContext);

  useEffect(() => {
    axios.get(`${BASE_URL}/teachers`)
      .then((res) => setTeachers(res.data));
  }, []);

  return (
    <Page>
      {teachers.map((teacher, key) => {
        return(
          <Button key={key} onClick={() => {
            setTeacherId(teacher.id);
            navigate(`/send-exam/class/${teacher.id}`);
          }}>{teacher.name}</Button>
        );
      })}
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