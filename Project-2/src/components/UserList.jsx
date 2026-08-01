import ContactCard from './ContactCard.jsx'

function UserList({ contacts, onDeleteContact }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Contact List</h2>
        <span className="count-badge">{contacts.length} saved</span>
      </div>

      {contacts.length === 0 ? (
        <p className="empty-state">No contacts added yet.</p>
      ) : (
        <div className="card-list">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default UserList