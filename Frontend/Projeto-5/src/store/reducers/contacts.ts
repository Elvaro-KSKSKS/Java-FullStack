import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Isadora Souto',
      telNumber: '(18) 96128-1720',
      email: 'isa.souto@gmail.com'
    },
    {
      id: 2,
      name: 'Sílvia Diniz',
      telNumber: '(63) 98484-7608',
      email: 'silvia_diniz@yahoo.com'
    },
    {
      id: 3,
      name: 'Kléber Henrique',
      telNumber: '(68) 90629-5368',
      email: 'kleber_henrique80@outlook.com'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((contact) => contact.id != action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      if (
        state.items.find(
          (contact) =>
            contact.name.toLocaleLowerCase() ===
            action.payload.name.toLocaleLowerCase()
        )
      ) {
        alert('Já existe um contato com esse nome!')
      } else {
        const lastContact = state.items[state.items.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact.id + 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = contactsSlice.actions

export default contactsSlice.reducer
