import ImgLogo from '../../assets/Logo.svg'
import { Container, Content } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={ImgLogo} alt="dt money" />
        <button type="button"> Nova transação</button>
      </Content>
    </Container>
  )
}
