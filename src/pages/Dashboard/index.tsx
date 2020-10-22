import React from 'react';
import { FaBars } from 'react-icons/fa';

import {
  Container,
  TeacherContainer,
  StudentContainer,
  SignUp,
  CardLink,
  SecretaryContainer,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      {/* Div para o card */}
      <TeacherContainer>
        {/* Link pra rota do professor */}
        <CardLink to="/teacher">
          {/* h1 titulo do portal */}
          <h1>
            Portal do <span>professor</span>
          </h1>
          <p>Acesse aqui</p>
        </CardLink>

        {/* Link pra rota de cadastro */}
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

      <SecretaryContainer to="secretary">
        <h1>Área de secretário</h1>
        <FaBars size={25} color="#fff" />
      </SecretaryContainer>
    </Container>
  );
};

export default Dashboard;
