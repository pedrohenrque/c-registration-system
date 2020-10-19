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

interface TeacherProps {
  id: any;
  name: string;
  dateOfBirth: string;
  socialSecurity: number;
  status: string;
  departament: string;
}

const Teacher: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [modelIsOpen, setmodalIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [allTeacher, setAllTeacher] = useState<TeacherProps[]>(() => {
    const storageRepositories = sessionStorage.getItem('@teacher:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    sessionStorage.setItem('@teacher:repositories', JSON.stringify(allTeacher));
  }, [allTeacher]);

  const handleDelete = useCallback((index: number) => {
    setAllTeacher(state => {
      const newTeacher = [...state];

      newTeacher.splice(index, 1);

      return newTeacher;
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

      setAllTeacher([
        ...allTeacher,
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
            <h1>Portal do Professor</h1>
          </div>
          <ButtonInclude type="button" onClick={() => setmodalIsOpen(true)}>
            <FaPlus size={14} />
            Incluir professor
          </ButtonInclude>
        </HeaderContainer>

        <HeaderTable>
          <h1>Professores cadastrados</h1>
          <div>
            <UpdateButton type="button" onClick={() => setUpdateModal(true)}>
              Modificar um professor
            </UpdateButton>
            <DeleteButton type="button" onClick={() => setDeleteModal(true)}>
              Excluir um professor
            </DeleteButton>
          </div>
        </HeaderTable>
        <Table>
          <TableContent>
            <ul style={{ color: '#232242' }}>
              <li style={{ fontWeight: 'bold' }}>Nome</li>
              <li style={{ fontWeight: 'bold' }}>Data de Nascimento</li>
              <li style={{ fontWeight: 'bold' }}>Número Social</li>
              <li style={{ fontWeight: 'bold' }}>Status</li>
              <li style={{ fontWeight: 'bold' }}>Departamento</li>
            </ul>
            {allTeacher &&
              allTeacher.map((repo: TeacherProps, index) => (
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
          title="Modificar um professor"
          openModal={updateModal}
          onClick={() => setUpdateModal(false)}
        >
          <InputContainer>
            <p>Digite ID do professor que deseja modificar:</p>
            <input type="text" />
            <button type="button">Buscar</button>
          </InputContainer>
        </ModalContainer>

        <ModalContainer
          title="Excluir um professor"
          openModal={deleteModal}
          onClick={() => setDeleteModal(false)}
        >
          <InputContainer>
            <p>Digite ID do professor que deseja deletar:</p>
            <input type="text" />
            <button type="button">Buscar</button>
          </InputContainer>
        </ModalContainer>

        <ModalContainer
          title="Adicionar novo professor"
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

export default Teacher;
