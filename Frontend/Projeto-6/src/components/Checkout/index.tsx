import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import Button from '../Button'
import * as S from './styles'
import { SidebarStep } from '../Sidebar'
import Loader from '../Loader'
import { colors } from '../../styles'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { useEffect } from 'react'
import { getTotalPrice, parseToBrl } from '../../utils'

type CheckoutStep = Exclude<SidebarStep, 'cart'>

type Props = {
  step: CheckoutStep
  onChangeStep: (step: CheckoutStep) => void
  onBack: () => void
}

const Checkout = ({ step, onChangeStep, onBack }: Props) => {
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const form = useFormik({
    initialValues: {
      name: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
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
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      cardDisplayName: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .required('O campo é obrigatório')
              .min(3, 'O campo precisa ter pelo menos 3 caracteres')
              .max(50, 'O campo precisa ter no máximo 50 caracteres')
          : schema
      ),

      cardNumber: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .required('O campo é obrigatório')
              .min(19, 'O campo precisa ter 19 caracteres')
              .max(19, 'O campo precisa ter 19 caracteres')
          : schema
      ),

      cardCode: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .required('O campo é obrigatório')
              .min(3, 'O campo precisa ter 3 caracteres')
              .max(3, 'O campo precisa ter 3 caracteres')
          : schema
      ),

      expiresMonth: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .required('O campo é obrigatório')
              .min(2, 'O campo precisa ter 2 caracteres')
              .max(2, 'O campo precisa ter 2 caracteres')
          : schema
      ),

      expiresYear: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .required('O campo é obrigatório')
              .min(2, 'O campo precisa ter 2 caracteres')
              .max(2, 'O campo precisa ter 2 caracteres')
          : schema
      )
    }),
    onSubmit: (values) => {
      if (step === 'delivery') {
        form.setTouched({})
        onChangeStep('payment')
        return
      }

      if (step === 'payment') {
        purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: values.name,
            address: {
              description: values.adress,
              city: values.city,
              zipCode: values.cep,
              number: values.number,
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardDisplayName,
              number: values.cardNumber,
              code: values.cardCode,
              expires: {
                month: values.expiresMonth,
                year: values.expiresYear
              }
            }
          }
        })

        onChangeStep('confirmation')
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  if (step === 'delivery') {
    return (
      <S.Form onSubmit={form.handleSubmit}>
        <h4>Entrega</h4>
        <S.FormInputDivisor>
          <S.InputGroup>
            <label htmlFor="name">Quem irá receber</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('name') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input
              id="adress"
              type="text"
              name="adress"
              value={form.values.adress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('adress') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <InputMask
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cep') ? 'error' : ''}
                mask="99999-999"
                maskChar=""
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="number">Número</label>
              <input
                id="number"
                type="text"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('number') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Row>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.FormInputDivisor>
        <Button type="submit" title="Continuar com o pagamento">
          Continuar com o pagamento
        </Button>
        <Button title="Voltar para o carrinho" onClick={onBack}>
          Voltar para o carrinho
        </Button>
      </S.Form>
    )
  }
  if (step === 'payment') {
    return (
      <S.Form onSubmit={form.handleSubmit}>
        <h4>
          Pagamento - Valor a pagar{' '}
          <span>{parseToBrl(getTotalPrice(items))}</span>
        </h4>
        <S.FormInputDivisor>
          <S.InputGroup>
            <label htmlFor="cardDisplayName">Nome no cartão</label>
            <input
              id="cardDisplayName"
              type="text"
              name="cardDisplayName"
              value={form.values.cardDisplayName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardDisplayName') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.Row>
            <S.InputGroup $maxWidth="232px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
                maskChar=""
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                id="cardCode"
                type="text"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardCode') ? 'error' : ''}
                mask="999"
                maskChar=""
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresMonth') ? 'error' : ''}
                mask="99"
                maskChar=""
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresYear') ? 'error' : ''}
                mask="99"
                maskChar=""
              />
            </S.InputGroup>
          </S.Row>
        </S.FormInputDivisor>
        <Button type="submit" title="Finalizar pagamento">
          Finalizar pagamento
        </Button>
        <Button
          title="Voltar para a edição de endereço"
          onClick={() => onChangeStep('delivery')}
        >
          Voltar para a edição de endereço
        </Button>
      </S.Form>
    )
  }
  if (isLoading) {
    return <Loader color={colors.beigeLight} />
  }
  if (isSuccess && data) {
    return (
      <S.MessageContainer>
        <h4>Pedido Realizado - {data.orderId}</h4>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido. <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <br />
        <Button title="Concluir" onClick={onBack}>
          Concluir
        </Button>
      </S.MessageContainer>
    )
  }
  return (
    <S.MessageContainer>
      <p>Algo deu errado. Por favor, tente novamente mais tarde.</p>
      <br />
      <Button title="Concluir" onClick={onBack}>
        Voltar
      </Button>
    </S.MessageContainer>
  )
}

export default Checkout
