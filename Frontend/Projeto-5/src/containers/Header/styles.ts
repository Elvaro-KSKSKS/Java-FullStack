import { Link } from 'react-router-dom'
import styled from 'styled-components'

import variables from '../../styles/variables'

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 40px;

  div:nth-child(2) {
    border-inline: 2px solid ${variables.primaryColor};
    padding: 0 64px;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  h2 {
    font-weight: bold;
  }

  .material-symbols-outlined {
    font-size: 2rem;
  }
`

export const AddButton = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 100%;
  padding: 0 16px 0 14px;
  border-radius: 8px;
  background-color: ${variables.green};
  color: ${variables.white};
  text-decoration: none;

  .material-symbols-outlined {
    margin-right: 2px;
  }
`
