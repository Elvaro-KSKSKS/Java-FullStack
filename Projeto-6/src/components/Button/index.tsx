import * as S from './styles'

type Props = {
  link?: boolean
  title: string
  type?: 'button' | 'submit' | 'reset'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({
  link,
  title,
  type = 'button',
  to,
  onClick,
  children
}: Props) => {
  if (link) {
    return (
      <S.LinkButton to={to as string} title={title}>
        {children}
      </S.LinkButton>
    )
  }
  return (
    <S.Button type={type} title={title} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default Button
