import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm.jsx'
import UserList from './components/UserList.jsx'

function App() {
  const [contacts, setContacts] = useState([])

  const addContact = (contact) => {
    setContacts((currentContacts) => [
      { id: Date.now(), ...contact },
      ...currentContacts,
    ])
  }

  const deleteContact = (id) => {
    setContacts((currentContacts) =>
      currentContacts.filter((contact) => contact.id !== id),
    )
  }

  return (
    <main className="app-shell">
      <section className="app-card">
        <div className="app-header">
          <p className="app-label">Contact Cards</p>
          <h1>Save and manage your contacts</h1>
          <p className="app-description">
            Add contact details below and keep the list updated with simple React state.
          </p>
        </div>

        <div className="content-grid">
          <ContactForm onAddContact={addContact} />
          <UserList contacts={contacts} onDeleteContact={deleteContact} />
        </div>
      </section>
    </main>
  )
}

export default App
