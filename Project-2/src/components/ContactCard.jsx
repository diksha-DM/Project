function ContactCard({ contact, onDeleteContact }) {
  return (
    <article className="contact-card">
      <div>
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </article>
  )
}

export default ContactCard