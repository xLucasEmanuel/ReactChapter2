import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import vectorImg from '../../assets/Vector.svg';
import entradasImg from '../../assets/Entradas.svg'
import saidasImg from '../../assets/Saídas.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../services/api';
import { useTransactions } from '../../hooks/useTransactions'




interface NewTransactionModalProps {

  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }



  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className='react-modal-content'
    >

      <button type='button'
        className='react-modal-close'
        onClick={onRequestClose}>
        <img src={vectorImg}
          alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder='Titulo'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input type='number'
          placeholder='Valor'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>

          <RadioBox
            type='button'
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <span>Entradas</span>
            <img src={entradasImg}
              alt="Entradas" />
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <span>Saídas</span>
            <img src={saidasImg}
              alt="Saídas" />
          </RadioBox>

        </TransactionTypeContainer>

        <input placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}

        />
        <button type='submit'>Cadastrar</button>

      </Container>
    </Modal>

  );
}