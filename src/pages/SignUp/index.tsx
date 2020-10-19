import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft } from 'react-icons/md';

import InputTitle from '../../components/InputTitle';
import * as Yup from 'yup';
import { uuid } from 'uuidv4';

import { Redirect } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import { Container, HeaderContainer, Content, FormContainer } from './styles';

interface StudentProps {
  id: any;
  name: string;
  dateOfBirth: string;
  socialSecurity: number;
  status: string;
  departament: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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
            <h1>Cadastre-se</h1>
          </div>
        </HeaderContainer>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormContainer ref={formRef} onSubmit={handleSubmit}>
            <InputTitle title="Nome" name="name" />

            <InputTitle title="Data de nascimento" name="dateOfBirth" />

            <InputTitle title="Número social" name="socialSecurity" />

            <InputTitle title="Status" name="status" />

            <InputTitle title="Departamento" name="departament" />

            <button type="submit">Salvar</button>
          </FormContainer>
        </div>
      </Content>
    </Container>
  );
};

export default SignUp;
