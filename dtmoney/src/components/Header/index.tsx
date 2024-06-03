import ImgLogo from '../../assets/Logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
  onOpenNewTransactionsModal: () => void;
}

export default function Header({onOpenNewTransactionsModal} : HeaderProps) {
  
  return (
    <Container>
      <Content>
        <img src={ImgLogo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionsModal}>
          Nova transação
        </button>
        
      </Content>
    </Container>
  ) 
}

