import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TeacherContainer, StudentContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <TeacherContainer>
        <Link to="/teacher">
          <h1>
            Portal do <span>professor</span>
          </h1>
          <p>Acesse aqui</p>
        </Link>
      </TeacherContainer>
      <StudentContainer>
        <Link to="/student">
          <h1>
            Portal do <span>aluno</span>
          </h1>
          <p>Acesse aqui</p>
        </Link>
      </StudentContainer>
    </Container>
  );
};

export default Dashboard;
