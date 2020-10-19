import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import ModalContainer from '../../components/ModalContainer';
import { uuid } from 'uuidv4';

import {
  Container,
  HeaderContainer,
  Content,
  Title,
  Card,
  Table,
  TableContent,
  DataContainer,
} from './styles';
import { setDayWithOptions } from 'date-fns/fp';

interface StudentsProps {
  id: any;
  name: string;
  note?: string;
}
interface CourseProps {
  id: any;
  name: string;
  active: boolean;
  students?: StudentsProps[];
}

const Student: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState<StudentsProps[]>([]);

  const [allCourses, setAllCourses] = useState<CourseProps[]>(() => [
    {
      id: uuid(),
      name: 'Análise e Desenvolvimento de Sistemas',
      students: [
        {
          id: uuid(),
          name: 'Leonardo Henrique',
          note: '9.2',
        },
        {
          id: uuid(),
          name: 'Brigadeiro Chapado',
          note: '9.2',
        },
      ],
      active: true,
    },
    {
      id: uuid(),
      name: 'Banco de Dados',
      active: false,
    },
    {
      id: uuid(),
      name: 'Segurança da informação',
      active: false,
    },
    {
      id: uuid(),
      name: 'Construção de Edifícios',
      active: false,
    },
    {
      id: uuid(),
      name: 'Engenharia Civil',
      active: false,
    },
    {
      id: uuid(),
      name: 'Engenharia da Computação',
      active: true,
      students: [
        {
          id: uuid(),
          name: 'Pedro Henrique',
          note: '9.2',
        },
        {
          id: uuid(),
          name: 'Larissa Borges Calçados',
          note: '9.2',
        },
      ],
    },
    {
      id: uuid(),
      name: 'Engenharia Elétrica',
      active: false,
    },
    {
      id: uuid(),
      name: 'Engenharia de Produção',
      active: false,
    },
  ]);

  function handleDataModal(data: any) {
    setOpenModal(true);
    setDataModal(data);
  }

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <div>
            <Link to="/">
              <button type="button">
                <MdKeyboardArrowLeft size={40} color="#000" />
              </button>
            </Link>
            <h1>Portal do Professor</h1>
          </div>
        </HeaderContainer>
        <Title>
          <h1>Cursos disponíveis:</h1>
        </Title>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {allCourses.map(course => (
            <Card key={course.id}>
              <h1>{course.name}</h1>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {course.active === false ? (
                  <button type="button">Ministrar</button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleDataModal(course.students)}
                  >
                    Dar nota
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
        <ModalContainer
          title="Publicar notas"
          openModal={openModal}
          onClick={() => setOpenModal(false)}
        >
          <TableContent>
            <ul style={{ color: '#232242' }}>
              <li style={{ fontWeight: 'bold' }}>Nome do aluno</li>
              <li style={{ fontWeight: 'bold' }}>Notas</li>
              <li style={{ fontWeight: 'bold' }}>Insira a nota</li>
            </ul>
            {dataModal &&
              dataModal.map(repo => (
                <DataContainer key={repo.id}>
                  <ul>
                    <li>{repo.name} </li>
                    <li>{repo.note}</li>
                    <input maxLength={4} type="text" />
                  </ul>
                </DataContainer>
              ))}
          </TableContent>
        </ModalContainer>
      </Content>
    </Container>
  );
};

export default Student;
