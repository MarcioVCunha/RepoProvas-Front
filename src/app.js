import Pages from './pages';
import GlobalStyle from './styles/globalStyle';
import UserContext from './context/UserContext.js';
import { useState } from 'react'; 

const App = function () {
  const [teacherId, setTeacherId] = useState('');
  const [classId, setClassId] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  return (
    <UserContext.Provider value={{ teacherId, setTeacherId, classId, setClassId, type, setType, name, setName, link, setLink }}>
      <GlobalStyle />
      <Pages />
    </UserContext.Provider>
  );
};

export default App;
