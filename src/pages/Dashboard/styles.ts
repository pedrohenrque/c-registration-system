import styled from 'styled-components';
import student from '../../assets/student.png';
import teacher from '../../assets/teacher.png';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

export const TeacherContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${teacher}) no-repeat center;
  background-size: cover;

  a {
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
      transform: translateY(-10px);
      background: rgba(0, 0, 0, 0.4);
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
  }
`;

export const StudentContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${student}) no-repeat center;
  background-size: cover;

  a {
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
      transform: translateY(-10px);
      background: rgba(0, 0, 0, 0.4);
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
  }
`;
