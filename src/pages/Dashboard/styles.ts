import styled from 'styled-components';
import student from '../../assets/student.png';
import teacher from '../../assets/teacher.png';

import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

export const TeacherContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${teacher}) no-repeat center;
  background-size: cover;
`;

export const StudentContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: url(${student}) no-repeat center;
  background-size: cover;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.01);
  border: 2px solid rgba(0, 0, 0, 0.01);
  padding: 20px 40px;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-20px);
    background: rgba(0, 0, 0, 0.52);
    border: 2px solid #5267f4;
  }

  h1 {
    font-size: 55px;
    font-weight: 400;
    color: #fff;

    span {
      font-weight: 800;
    }
  }

  p {
    margin-top: 40px;
    font-size: 25px;
    font-weight: 400;
    color: #5267f4;
  }
`;

export const SignUp = styled(Link)`
  background: #5267f4;
  text-decoration: none;
  margin-top: 100px;
  padding: 10px 60px;
  font-size: 16px;
  border-radius: 8px;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background: ${shade(0.2, '#5267f4')};
  }
`;

export const SecretaryContainer = styled(Link)`
  position: absolute;
  right: 50px;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5267f4;
  text-decoration: none;
  padding: 20px 30px;
  border-radius: 8px;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background: ${shade(0.2, '#5267f4')};
  }

  h1 {
    margin-right: 15px;
    font-size: 16px;
  }
`;
