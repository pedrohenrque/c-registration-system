import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TeacherContainer,
  StudentContainer,
  SignUp,
  CardLink,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <TeacherContainer>
        <CardLink to="/teacher">
          <h1>
            Portal do <span>professor</span>
          </h1>
          <p>Acesse aqui</p>
        </CardLink>

        <SignUp to="/signup">Cadastrar</SignUp>
      </TeacherContainer>
      <StudentContainer>
        <CardLink to="/student">
          <h1>
            Portal do <span>aluno</span>
          </h1>
          <p>Acesse aqui</p>
        </CardLink>

        <SignUp to="/signup">Cadastrar</SignUp>
      </StudentContainer>
    </Container>
  );
};

export default Dashboard;
