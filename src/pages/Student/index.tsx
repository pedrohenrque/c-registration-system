import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

import InputTitle from '../../components/InputTitle';
import * as Yup from 'yup';
import { uuid } from 'uuidv4';

import ModalContainer from '../../components/ModalContainer';

import { FormHandles } from '@unform/core';

import {
  Container,
  HeaderContainer,
  ButtonInclude,
  Table,
  TableContent,
  Button,
  Content,
  FormContainer,
  HeaderTable,
  UpdateButton,
  DeleteButton,
  InputContainer,
} from './styles';

interface StudentProps {
  id: any;
  name: string;
  dateOfBirth: string;
  socialSecurity: number;
  status: string;
  departament: string;
}

const Student: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [modelIsOpen, setmodalIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [allStudent, setAllStudent] = useState<StudentProps[]>(() => {
    const storageRepositories = sessionStorage.getItem('@student:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    sessionStorage.setItem('@student:repositories', JSON.stringify(allStudent));
  }, [allStudent]);

  const handleDelete = useCallback((index: number) => {
    setAllStudent(state => {
      const newStudent = [...state];

      newStudent.splice(index, 1);

      return newStudent;
    });
  }, []);

  const handleSubmit = useCallback(async formData => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        dateOfBirth: Yup.string().required('Data obrigatória'),
        socialSecurity: Yup.string().required('Número obrigatório'),
        status: Yup.string().required('Status obrigatório'),
        departament: Yup.string().required('Departamento obrigatório'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      const {
        name,
        dateOfBirth,
        socialSecurity,
        status,
        departament,
      } = formData;

      setAllStudent([
        ...allStudent,
        {
          id: uuid(),
          name: name,
          dateOfBirth: dateOfBirth,
          socialSecurity: socialSecurity,
          status: status,
          departament: departament,
        },
      ]);

      setmodalIsOpen(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Todo erros
        return;
      }
    }
  }, []);

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
            <h1>Portal do Aluno</h1>
          </div>
          <ButtonInclude type="button" onClick={() => setmodalIsOpen(true)}>
            <FaPlus size={14} />
            Incluir aluno
          </ButtonInclude>
        </HeaderContainer>

        <Table>
          <HeaderTable>
            <h1>Alunos cadastrados</h1>
            <div>
              <UpdateButton type="button" onClick={() => setUpdateModal(true)}>
                Modificar um aluno
              </UpdateButton>
              <DeleteButton type="button" onClick={() => setDeleteModal(true)}>
                Excluir um aluno
              </DeleteButton>
            </div>
          </HeaderTable>
          <TableContent>
            <ul style={{ color: '#232242' }}>
              <li style={{ fontWeight: 'bold' }}>Nome</li>
              <li style={{ fontWeight: 'bold' }}>Data de Nascimento</li>
              <li style={{ fontWeight: 'bold' }}>Número Social</li>
              <li style={{ fontWeight: 'bold' }}>Status</li>
              <li style={{ fontWeight: 'bold' }}>Departamento</li>
            </ul>
            {allStudent &&
              allStudent.map((repo: StudentProps, index) => (
                <Button
                  type="button"
                  key={repo.id}
                  onClick={() => handleDelete(index)}
                >
                  <ul>
                    <li>{repo.name} </li>
                    <li>{repo.dateOfBirth}</li>
                    <li>{repo.socialSecurity}</li>
                    <li>{repo.status}</li>
                    <li>{repo.departament}</li>
                  </ul>
                </Button>
              ))}
          </TableContent>
        </Table>

        <ModalContainer
          title="Modificar um aluno"
          openModal={updateModal}
          onClick={() => setUpdateModal(false)}
        >
          <InputContainer>
            <p>Digite ID do aluno que deseja modificar:</p>
            <input type="text" />
            <button type="button">Buscar</button>
          </InputContainer>
        </ModalContainer>

        <ModalContainer
          title="Excluir um aluno"
          openModal={deleteModal}
          onClick={() => setDeleteModal(false)}
        >
          <InputContainer>
            <p>Digite ID do aluno que deseja deletar:</p>
            <input type="text" />
            <button type="button">Buscar</button>
          </InputContainer>
        </ModalContainer>

        <ModalContainer
          title="Adicionar novo aluno"
          openModal={modelIsOpen}
          onClick={() => setmodalIsOpen(false)}
        >
          <FormContainer ref={formRef} onSubmit={handleSubmit}>
            <InputTitle title="Nome" name="name" />

            <InputTitle title="Data de nascimento" name="dateOfBirth" />

            <InputTitle title="Número social" name="socialSecurity" />

            <InputTitle title="Status" name="status" />

            <InputTitle title="Departamento" name="departament" />

            <button type="submit">Salvar</button>
          </FormContainer>
        </ModalContainer>
      </Content>
    </Container>
  );
};

export default Student;
