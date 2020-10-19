import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft } from 'react-icons/md';

import { uuid } from 'uuidv4';

import {
  Container,
  HeaderContainer,
  Content,
  Title,
  Card,
  Table,
  TableContent,
  Button,
} from './styles';

interface CourseProps {
  id: any;
  name: string;
  bio: string;
}

interface NoteProps {
  id: any;
  course: string;
  note: string;
}

const Student: React.FC = () => {
  const [allNote, setAllNote] = useState<NoteProps[]>([
    {
      id: uuid(),
      course: 'Análise e Desenvolvimento de Sistemas',
      note: '9,9',
    },
    {
      id: uuid(),
      course: 'Banco de Dados',
      note: '7,9',
    },
  ]);
  const [allCourses, setAllCourses] = useState<CourseProps[]>(() => [
    {
      id: uuid(),
      name: 'Análise e Desenvolvimento de Sistemas',
      bio:
        'Este profissional tem como especialidade o desenvolvimento de sistemas informatizados para diversos setores, visando um melhor aproveitamento das máquinas com uma maior capacidade de armazenamento e velocidade no processamento dos dados.',
    },
    {
      id: uuid(),
      name: 'Banco de Dados',
      bio:
        'Este profissional é responsável por gerenciar todo o ecossistema voltado para armazenamento de dados. Ele é, também, encarregado por desenvolver, monitorar e garantir a integridade e disponibilidade de informações, atuando também nos aspectos relacionados ao suporte e segurança da informação.',
    },
    {
      id: uuid(),
      name: 'Segurança da informação',
      bio:
        'Este profissional é um especialista na segurança de redes de computadores. O tecnólogo evita que a rede seja invadida por pessoas não autorizadas, protegendo assim as informações dos usuários da empresa e seus clientes. Seu trabalho garante a confiabilidade, a integridade e a disponibilidade dos dados.',
    },
    {
      id: uuid(),
      name: 'Construção de Edifícios',
      bio:
        'O profissional desta área sabe ler projetos e conhece todas as partes integrantes de uma edificação. Domina os diversos tipos de tecnologias construtivas, empregando materiais e suas composições, calculando orçamentos e aprendendo a executar cada projeto.',
    },
    {
      id: uuid(),
      name: 'Engenharia Civil',
      bio:
        'Este profissional projeta, coordena, executa e fiscaliza qualquer tipo de atividade nos ramos de edificações; estradas; sistema de transportes; abastecimento de água e saneamento; drenagem e irrigação; pontes e grandes estruturas; além de todo tipo de serviço relacionado a essas áreas.',
    },
    {
      id: uuid(),
      name: 'Engenharia da Computação',
      bio:
        'Este profissional desenvolve computadores, periféricos, hardwares e softwares. Além disso, elabora projetos para diversos ramos que necessitem da tecnologia. O engenheiro da computação projeta robôs, cria sistemas digitais, softwares, sistemas, gerencia redes de computadores, entre outros.',
    },
    {
      id: uuid(),
      name: 'Engenharia Elétrica',
      bio:
        'Seu segmento de atuação profissional se baseia em atividades relacionadas a eletricidade, providenciando os recursos, orientando a construção, instalação, funcionamento e manutenção de usinas, aparelhos, instalações de projetos e equipamentos elétricos. ',
    },
    {
      id: uuid(),
      name: 'Engenharia de Produção',
      bio:
        'Com sua capacidade de visão ampla desenvolvida em sua trajetória acadêmica através do portfólio de disciplinas que mesclam entre técnica e gestão, o Engenheiro de Produção atua em projetos, administração, análise de processos produtivos de qualquer organização.',
    },
  ]);

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
            <h1>Portal do Estudante</h1>
          </div>
        </HeaderContainer>
        <Title>
          <h1>Cursos disponíveis:</h1>
        </Title>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {allCourses.map(course => (
            <Card key={course.id}>
              <h1>{course.name}</h1>
              <p>{course.bio}</p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <button type="button">Se increver</button>
              </div>
            </Card>
          ))}
        </div>
        <Title>
          <h1>Notas:</h1>
        </Title>
        <Table>
          <TableContent>
            <ul style={{ color: '#232242' }}>
              <li style={{ fontWeight: 'bold' }}>Curso</li>
              <li style={{ fontWeight: 'bold' }}>Nota</li>
            </ul>
            {allNote &&
              allNote.map(repo => (
                <Button type="button" key={repo.id}>
                  <ul>
                    <li>{repo.course} </li>
                    <li>{repo.note}</li>
                  </ul>
                </Button>
              ))}
          </TableContent>
        </Table>
      </Content>
    </Container>
  );
};

export default Student;
