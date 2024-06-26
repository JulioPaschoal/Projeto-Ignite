import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import IncomeImg from '../../assets/incomeImg.svg'
import OutcomeImg from '../../assets/outcomeImg.svg'
import { Container, TransactionTypeContainer, RadioBox } from './style';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className='react-modal-content'
        >
          <button type='button' 
            onClick={onRequestClose}
            className='react-modal-close'>
            <img src={closeImg} alt="Fechar Modal" />
          </button>
        <Container>
          <h2>Cadastrar transação</h2>
          <input placeholder='Titulo' />
          <input type='number' placeholder='Valor' />
          <TransactionTypeContainer>
            <RadioBox 
              type='button' 
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              activeColor="green"
              >
              <img src={IncomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type='button'
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={OutcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input placeholder='Categoria' />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  )
}
