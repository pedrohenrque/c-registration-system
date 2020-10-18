import React from 'react';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';

import { Container, HeaderModal, ButtonCloseModal, Title } from './styles';

interface ModalProps {
  title: string;
  openModal: boolean;
  onClick: () => void;
}

const UpdateTeacher: React.FC<ModalProps> = ({
  openModal,
  title,
  onClick,
  children,
}) => {
  return (
    <Container>
      <Modal
        isOpen={openModal}
        style={{
          overlay: {
            minHeight: '100vh',
            display: 'flex',
            backgroundColor: 'rgba(0, 0, 0, 0.30)',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            position: 'relative',
            background: '#fff',
            borderRadius: 16,
            padding: 15,
            width: 'auto',
            height: 'auto',
          },
        }}
      >
        <HeaderModal>
          <Title>{title}</Title>
          <ButtonCloseModal type="button" onClick={onClick}>
            <MdClose size={30} />
          </ButtonCloseModal>
        </HeaderModal>
        {children}
      </Modal>
    </Container>
  );
};

export default UpdateTeacher;
