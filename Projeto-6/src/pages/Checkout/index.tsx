import Button from '../../components/Button'
import { Container, Row, InputGroup } from './styles'
import { SidebarStep } from '../../components/Sidebar'

type CheckoutStep = Exclude<SidebarStep, 'cart'>

type Props = {
  step: CheckoutStep
  onChangeStep: (step: CheckoutStep) => void
  onBack: () => void
}

const Checkout = ({ step, onChangeStep, onBack }: Props) => {
  if (step === 'delivery') {
    return (
      <Container>
        <h4>Entrega</h4>
        <InputGroup>
          <label htmlFor="name">Quem irá receber</label>
          <input id="name" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Endereço</label>
          <input id="email" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" />
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="number">Número</label>
            <input id="number" type="text" />
          </InputGroup>
        </Row>
        <Button
          title="Continuar com o pagamento"
          onClick={() => onChangeStep('payment')}
        >
          Continuar com o pagamento
        </Button>
        <Button title="Voltar para o carrinho" onClick={onBack}>
          Voltar para o carrinho
        </Button>
      </Container>
    )
  }
  if (step === 'payment') {
    return (
      <Container>
        <h4>Pagamento - Valor a pagar R$ 190,90</h4>
        <InputGroup>
          <label htmlFor="cardDisplayName">Nome no cartão</label>
          <input id="cardDisplayName" type="text" />
        </InputGroup>
        <Row>
          <InputGroup maxWidth="232px">
            <label htmlFor="cardNumber">Número do cartão</label>
            <input id="cardNumber" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input id="cardCode" type="text" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input id="expiresMonth" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input id="expiresYear" type="text" />
          </InputGroup>
        </Row>
        <Button
          title="Finalizar pagamento"
          onClick={() => onChangeStep('confirmation')}
        >
          Finalizar pagamento
        </Button>
        <Button
          title="Voltar para a edição de endereço"
          onClick={() => onChangeStep('delivery')}
        >
          Voltar para a edição de endereço
        </Button>
      </Container>
    )
  }
  return (
    <Container>
      <h4>Pedido Realizado</h4>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido. <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras. <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Button title="Concluir" onClick={onBack}>
        Concluir
      </Button>
    </Container>
  )
}

export default Checkout
