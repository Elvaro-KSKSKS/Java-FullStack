import Button from '../Button'
import { Form, Row, InputGroup } from './styles'
import { SidebarStep } from '../Sidebar'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type CheckoutStep = Exclude<SidebarStep, 'cart'>

type Props = {
  step: CheckoutStep
  onChangeStep: (step: CheckoutStep) => void
  onBack: () => void
}

const Checkout = ({ step, onChangeStep, onBack }: Props) => {
  const form = useFormik({
    initialValues: {
      name: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres'),
      number: Yup.string().required('O campo é obrigatório'),
      cardDisplayName: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
      onChangeStep('payment')
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message

    return ''
  }

  if (step === 'delivery') {
    return (
      <Form onSubmit={form.handleSubmit}>
        <h4>Entrega</h4>
        <InputGroup>
          <label htmlFor="name">Quem irá receber</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('name', form.errors.name)}</small>
        </InputGroup>
        <InputGroup>
          <label htmlFor="adress">Endereço</label>
          <input
            id="adress"
            type="text"
            name="adress"
            value={form.values.adress}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('adress', form.errors.adress)}</small>
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('city', form.errors.city)}</small>
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              type="text"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cep', form.errors.cep)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('number', form.errors.number)}</small>
          </InputGroup>
        </Row>
        <Button type="submit" title="Continuar com o pagamento">
          Continuar com o pagamento
        </Button>
        <Button title="Voltar para o carrinho" onClick={onBack}>
          Voltar para o carrinho
        </Button>
      </Form>
    )
  }
  if (step === 'payment') {
    return (
      <Form>
        <h4>Pagamento - Valor a pagar R$ 190,90</h4>
        <InputGroup>
          <label htmlFor="cardDisplayName">Nome no cartão</label>
          <input
            id="cardDisplayName"
            type="text"
            name="cardDisplayName"
            value={form.values.cardDisplayName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>
            {getErrorMessage('cardDisplayName', form.errors.cardDisplayName)}
          </small>
        </InputGroup>
        <Row>
          <InputGroup $maxWidth="232px">
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cardNumber', form.errors.cardNumber)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input
              id="cardCode"
              type="text"
              name="cardCode"
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              id="expiresMonth"
              type="text"
              name="expiresMonth"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input
              id="expiresYear"
              type="text"
              name="expiresYear"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('expiresYear', form.errors.expiresYear)}
            </small>
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
      </Form>
    )
  }
  return (
    <Form>
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
    </Form>
  )
}

export default Checkout
