import { useSelector } from 'react-redux'

import Contact from '../../components/Contact'
import { MainContainer } from '../../styles'

import { RootReducer } from '../../store'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    return items.filter(
      (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }

  return (
    <MainContainer>
      <ul>
        {filterContacts().map((c) => (
          <li key={c.id}>
            <Contact
              id={c.id}
              name={c.name}
              telNumber={c.telNumber}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
