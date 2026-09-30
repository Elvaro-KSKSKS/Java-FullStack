import { DotLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

type Props = {
  color?: string
}

const Loader = ({ color = colors.rose }: Props) => (
  <Container>
    <DotLoader color={color} />
  </Container>
)

export default Loader
